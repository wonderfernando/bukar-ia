"use client"
import Message from "@/components/bot/Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChatSession, GoogleGenerativeAI } from "@google/generative-ai"
import { GEMINI_KEY } from "@/lib/utils";



const googleGenerativeAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = googleGenerativeAI.getGenerativeModel({ model: "gemini-1.5-flash" })



const message_schemma = z.object({
    message: z.string().optional(),
    sender: z.string().default("me"),
    id: z.string().default("")
})
type message_type = z.infer<typeof message_schemma>

export default function BotMessagePage() {

    const scrolldiv = useRef<HTMLDivElement | null>(null)
    const [messages, setMessages] = useState<message_type[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [chatSession, setChatSession] = useState<ChatSession | null>(null)
    const [hasFetch, setHashFetch] = useState(true)

    const { register, handleSubmit, setValue } = useForm<message_type>({
        resolver: zodResolver(message_schemma)
    })

    async function run(prompt: string | undefined) {
        let Messageresult = await chatSession!.sendMessage(prompt!)
        const response = await Messageresult.response;
        const text = response.text();
        setMessages((state) => {
            const new_message: message_type = { id: crypto.randomUUID(), message: text, sender: "chat" }
            return [...state, new_message]
        })
    }

    async function handle_click(data: message_type) {
        setIsLoading(true)
        setMessages((state) => {
            data.id = crypto.randomUUID().toString();
            return [...state, data]
        })
        setValue("message", "")
        await run(data.message)
        setIsLoading(false)
    }

    useEffect(() => {
        if (hasFetch) { setHashFetch(false); return; }
        (async () => {
            const chat = await model.startChat();
            setChatSession(chat)
            const res = await chat?.sendMessage("voce agora é meu professor particular do ensino primario,estamos em uma aula, apenas eu e voce, e estamos estudando a disciplina de Lingua portuguesa,estamos no inicio da aula entao pergunte sobre alguns topicos que eu gostaria de aprender, e quando estudarmos algum topico deixe sempre tarefas no final, fala com portugues de portugal")
            const candidates = await res.response.candidates

            if (candidates)
                setMessages((state) => {
                    const data: message_type | null = { id: crypto.randomUUID().toString(), message: candidates[0].content.parts[0].text, sender: "chat" };
                    data.id = crypto.randomUUID().toString();
                    return [...state, data]
                })

        })()

    }, [hasFetch])

    console.log(hasFetch)
    useEffect(() => {
        if (scrolldiv.current)
            scrolldiv.current.scrollTop = scrolldiv.current.scrollHeight;
    }, [messages])

    return (
        <div className=" flex flex-col  h-[calc(100vh-40px)]">
            <div className="flex-1 overflow-y-auto p-4 flex items-start flex-col gap-2" ref={scrolldiv}>
                {messages.map((message) => <Message key={message.id} sender={message.sender} message={message.message!} />)}
            </div>
            <form className="flex w-full px-4 pb-4" onSubmit={handleSubmit(handle_click)}>
                <Input {...register("message")} className="w-full rounded-r-none focus-visible:ring-0" placeholder="Pergunte algo..." />
                <Button disabled={isLoading} className="border-l-0 rounded-l-none"><Send /></Button>
            </form>
        </div>
    )
}