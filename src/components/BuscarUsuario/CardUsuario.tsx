import {Link} from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import type { Usuario} from "../../types/Usuario"

export default function CardUsuario({usuarios}: {usuarios: Usuario[]}) {
   
    return(
        <div className="p-4">
            {usuarios.map((usuario) => (
            <div key={usuario.id} className="w-full border-2 border-[#BFC9C2]/40 bg-fundo-card shadow-md rounded-2xl p-4 mt-4 ">
                <img src={usuario.img} alt={usuario.nome} className="border-4
                 border-verde-leve rounded-2xl  w-18 h-18 object-cover object-top object-center  "></img>
                <div className="flex justify-end  rounded-lg "> 
                    <FaHeart className="text-verde-secundario text-2xl bg-[#FFF0F4] rounded-md 
                    h-8 w-8 p-1 -mt-15 mr-4" />
                </div>
                <p className="text-[#320F22] font-bold text-lg mt-2">{usuario.nome}</p>
                <p className="text-[#404944] text-sm">{usuario.username} • {usuario.email}</p>
                
                <div className="flex flex-wrap gap-2 mt-2 border-b border-[#BFC9C2]/40 pb-2">
                    <p className="bg-verde-leve text-[#002116] font-bold px-2 py-1 
                    rounded-md text-xs">{usuario.cargo}</p>
                    <p className="bg-[#FFE8F0] text-[#404944] font-bold px-2 py-1 
                    rounded-md text-xs">{usuario.especialidade}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-verde-principal font-semibold">• {usuario.projetos} Projetos</p>
                    <Link to={`/DetalheDoUsuario/${usuario.id}`} className="text-[#320F22] font-bold text-xs bg-[#FFE8F0] 
                    px-4 py-3 rounded-md cursor-pointer hover:bg-[#F5F0E6] active:scale-95 transition-colors">
                        Ver perfil →
                    </Link>
                </div>
              
            </div>
            ))}
        </div>
    )
}