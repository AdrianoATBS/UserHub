export default function Titulo(){
    return(
        <div className="p-4 ">
            <h2 className="text-2xl font-bold text-[#320F22] leading-tight">Encontre
                 <span className="text-verde-secundario">Usuários</span></h2>
            <p className="text-[#404944] leading-relaxed">Pesquise membros da comunidade, visualize
            perfis detalhados e interaja em tempo real.</p>
            <div className="w-fit flex items-center mt-4 gap-2 shadow-lg px-3 py-2 rounded-2xl bg-[#F5F0E6] ">
                <div className="bg-verde-leve w-8 h-8 rounded-full shrink-0 "></div>
                <div className="bg-verde-principal w-8 h-8 rounded-full shrink-0 -ml-5"></div>
                <div className="bg-verde-secundario w-8 h-8 rounded-full shrink-0 -ml-5"></div>
                <span className="text-xs text-[#404944] font-bold">+1.420 conexões ativas</span>
            </div>
        </div>
    )
}