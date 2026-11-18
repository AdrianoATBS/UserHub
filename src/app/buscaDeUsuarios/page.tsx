import Filtro from "../../components/BuscarUsuario/Filtro";
import Titulo from "../../components/BuscarUsuario/Titulo";
import CardUsuario from "../../components/BuscarUsuario/CardUsuario";
export default function BuscaDeUsuarios() {
    return(
        <main className="w-full min-h-screen  ">
            <section className="bg-linear-to-r from-[#F5F0E6] to-verde-leve/50  ">
                <Titulo />
                <Filtro />
            </section>

            <section className="bg-[#F5F0E6]">
                <CardUsuario/>
            </section>

        </main>
    )
}