"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
const user_schemma = z.object({
  name: z.string().min(3, "Nome invalido")
})

type userType = z.infer<typeof user_schemma>

export default function Home() {
  const router = useRouter()
  const form = useForm<userType>({
    resolver: zodResolver(user_schemma)
  })
  function handle_click(e: userType) {
      router.push("/nivel")
  }
  return (
    <main className="flex items-center justify-center">
      <div className="w-full px-4 mt-52">
        <form onSubmit={form.handleSubmit(handle_click)} className="w-full">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Label className="text-foreground">Insira seu nome</Label>
            <Input {...form.register("name")} className="" placeholder="Seu nome" />
            <Button>Continuar</Button>
            <Label className="text-red-700">{form.formState.errors && form.formState.errors.name?.message}</Label>
          </div>
        </form>
      </div>
    </main>
  );
}
