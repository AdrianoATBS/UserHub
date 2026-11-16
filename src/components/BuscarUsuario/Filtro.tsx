import { IoSearchSharp } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";

export default function Filtro(){
    return(
        <div className="p-6 " >
            <div className="bg-white roudend-2xl shadow-sm fborder border-[#D1D5DB] flex gap-2 items-center px-4 py-2 rounded-lg">
                <div className="bg-verde-leve h-12 w-12
                rounded-lg flex justify-center items-center shrink-0">
                    <IoSearchSharp className="text-2xl text-verde-secundario"/>
                </div>
                <input  type="text" placeholder="Buscar usuário por nome, @tag ou especialidade..." 
                className="min-w-0 flex-1 h-15  border border-[#6B7280] outline-none p-2 text-[#707974]" />

                <div className="flex justify-center items-center bg-verde-secundario w-fit rounded-lg px-4 py-2
                ">
                    <button className="flex justify-center items-center text-fundo-principal gap-2 
                    cursor-pointer shrink-0 active:scale-95 transition-all duration-200">
                        Filtrar
                        <LuSlidersHorizontal className="text-xl "/>
                    </button>
                </div>
            </div>
        </div>
    )
}