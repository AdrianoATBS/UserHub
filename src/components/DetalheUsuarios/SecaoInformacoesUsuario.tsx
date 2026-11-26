import { MdVerified } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";

export default function SecaoInformacoesUsuario() {
    return(
        <section className="w-full mx-auto mt-4 border border-[#BFC9C2]/40 bg-fundo-card rounded-lg p-4">
            <div className="w-full max-w-40 mx-auto bg-linear-to-tr from-verde-principal
                via-verde-leve to-[#606200] h-30 rounded-lg"></div>
            <div className="flex flex-col items-center gap-2 mt-4">
                <h1 className="text-3xl font-bold text-[#320F22] leading-tight">Beatriz Mendes</h1>
               
                <div className="flex gap-2 ">
                    <p className="text-sm text-verde-principal py-1 px-2
                     bg-verde-leve border-2 border-[#91D4B8] rounded-lg font-semibold">#USR-94821</p>
                    <div className="flex gap-1  py-1 px-2 bg-[#E6E96E] border-2 border-[#CACD56] rounded-lg">
                        <MdVerified className="text-[#1C1D00] w-5 h-5" />
                        <p className="text-sm text-[#1C1D00] font-semibold">Verificado</p>
                    </div>
                </div>
                
                <div className="flex gap-2 mt-1">
                    <MdOutlineEmail className="text-verde-principal w-5 h-5" />
                    <p className="text-sm text-[#404944] font-semibold">beatriz.mendes@example.com</p>
                </div>

                <div className="flex gap-4  mt-3">
                    <div className="flex gap-1 justify-center items-center whitespace-nowrap">
                        <FiMapPin className="text-verde-principal w-5 h-5" />
                        <p className="text-sm text-[#404944] font-semibold" >São Paulo, Brasil</p>
                    </div>
                    <div className="flex gap-1 justify-cente items-center whitespace-nowrap">
                        <SlBriefcase className="text-verde-principal w-5 h-5" />
                        <p className="text-sm text-[#404944] font-semibold ">CandyTech Studio</p>
                    </div>
                </div>

                <p className="text-sm text-[#404944] text-center leading-relaxed mt-2"> Senior Product Designer apaixonada por
                    criar interfaces memoráveis, sistemas
                    de design com microinterações alegres
                    e experiências pop repletas de empatia
                    e dinamismo digital.
                </p>
                <div className="flex flex-wrap gap-2 justify-center items-center mt-3">
                    <div className="bg-[#FFE8F0] border-2 border-[#BFC9C2]/30 rounded-lg py-1 px-2">
                        <p className="text-sm text-[#320F22] font-semibold">Senior Product Designer</p>
                    </div>
                    <div className="bg-[#FFE8F0] border-2 border-[#BFC9C2]/30 rounded-lg py-1 px-2">
                        <p className="text-sm text-[#320F22] font-semibold">Design Systems</p>
                    </div>
                    <div className="bg-[#FFE8F0] border-2 border-[#BFC9C2]/30 rounded-lg py-1 px-2">
                        <p className="text-sm text-[#320F22] font-semibold">Micro-animations</p>
                    </div>
                    <div className="bg-verde-leve border-2 border-[#91D4B8] rounded-lg py-1 px-2">
                        <p className="text-sm text-[#002116] font-semibold">Figma Master</p>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center mt-4">
                    <div className=" w-full flex gap-4 justify-center items-center mt-4 ">
                        <div className="w-full flex flex-col justify-center items-center 
                         bg-[#FFE8F0] border-2 border-[#BFC9C2]/30 rounded-lg py-1 px-2 ">
                            <p className="text-2xl font-bold text-verde-principal">142</p>
                            <p className="text-sm text-[#320F22] font-semibold">POSTS</p>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center
                        bg-[#FFE8F0] border-2 border-[#BFC9C2]/30 rounded-lg py-1 px-2">
                            <p className="text-2xl font-bold text-verde-principal">1.2K</p>
                            <p className="text-sm text-[#320F22] font-semibold">SEGUIDORES</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center  mt-2
                    bg-[#FFE8F0] border-2 border-[#BFC9C2]/30 rounded-lg py-1 px-2">
                        <p className="text-2xl font-bold text-verde-principal">48</p>
                        <p className="text-sm text-[#320F22] font-semibold">PROJETOS</p>
                    </div>
                </div>

            </div>
            
        </section>
    )
}