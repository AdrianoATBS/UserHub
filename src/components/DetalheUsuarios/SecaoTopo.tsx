import { IoIosStar } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";

export default function SecaoTopo() {
    return (
        <section className="w-full p-4 mt-3">
            <button className="w-fit border border-[#BFC9C2]/40 bg-fundo-card p-2 rounded-lg
            text-sm text-verde-principal font-semibold ">
                ⬅ Voltar para Busca
            </button>
            <div className="flex gap-4 items-center mt-4">
                <button className="flex gap-2 items-center border border-[#BFC9C2]/40 bg-verde-principal 
                p-2 rounded-lg text-sm text-fundo-card font-semibold  ">
                    <IoIosStar className="text-2xl text-[#E6E96E] " />
                    <span>Favoritado</span>
                    <span className="bg-fundo-card/20 p-0.5 rounded-md">143</span>
                </button>
                <div className="rounded-lg border border-[#BFC9C2]/40 bg-fundo-card p-2 ">
                    <IoMdShare className=" text-[#404944]  w-4 h-4 " />
                </div>
                <div className="rounded-lg border border-[#BFC9C2]/40 bg-fundo-card p-2 ">
                    <BsThreeDotsVertical className="text-[#404944] w-4 h-4" />
                </div>
            </div>

        </section>
    )
}