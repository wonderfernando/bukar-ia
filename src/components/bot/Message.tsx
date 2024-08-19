export default function Message({sender="chat", message}: {sender?: string, message:string}) {
    return (
        <div className={`${sender ===  "me" ? "bg-green-800 text-white" : "bg-muted text-foreground" }  rounded-lg p-2 text-sm w-auto`}>
            <p>{message}</p>
        </div>
    )
}