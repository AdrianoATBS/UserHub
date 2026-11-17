"use client"
import { IoSearchSharp } from "react-icons/io5";
import { LuSlidersHorizontal } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
type FiltroTipo = "todos" | "favoritos";

export default function Filtro() {
    const [filtroSelecionado, setFiltroSelecionado] = useState<FiltroTipo>("todos");
    const handleIsAtivo = () => {
        setFiltroSelecionado(filtroSelecionado === "todos" ? "favoritos" : "todos");
    }
    const dados = [
        { id: 1, nome: "Todos", quantidade: 28 },
        { id: 2, nome: "Favoritos", quantidade: 19 },
    ];

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
            <div className="flex  justify-center gap-4 mt-4">
               {dados.map((item) => (
                <div key={item.id} className={`flex gap-2 items-center px-2 py-3 rounded-lg cursor-pointer 
                ${filtroSelecionado === item.nome.toLowerCase() ? "bg-verde-secundario" : "bg-fundo-principal"
                }`} onClick={handleIsAtivo}>
                    {item.nome === "Todos" ? (
                        <MdPeopleAlt className={`text-xl ${filtroSelecionado === item.nome.toLowerCase() ? "text-fundo-principal" : "text-[#6B7280]"}`} />
                    ) : (
                        <FaHeart className={`text-xl ${filtroSelecionado === item.nome.toLowerCase() ? "text-fundo-principal" : "text-[#6B7280]"}`} />
                    )}
                    <span className={`font-semibold ${filtroSelecionado === item.nome.toLowerCase() ? 
                        "text-fundo-principal" : "text-[#6B7280]"}`}>
                        {item.nome} {item.quantidade}
                    </span>
                </div>
               ))
                }
            </div>
        </div> 
    )
}