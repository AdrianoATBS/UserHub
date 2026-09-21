import { UserGroup, User} from "lucide-react";

export function Header() {
    return(
        <header className="w-full shadow-md flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-2">
                <div className="rounded-lg bg-verde-principal p-2">
                    <UserGroup  className="text-verde-leve w-4 h-4"/>
                </div>
                <h2 className="text-2xl text-verde-secundario font-bold">UserHub</h2>

            </div>
            <div className="rounded-lg bg-verde-secundario p-2">
                <User className="text-fundo-card w-4 h-4"  />
            </div>
        </header>
    )
}