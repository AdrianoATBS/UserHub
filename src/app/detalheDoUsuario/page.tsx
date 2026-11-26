import SecaoInformacoesUsuario from "../../components/DetalheUsuarios/SecaoInformacoesUsuario";
import SecaoTopo from "../../components/DetalheUsuarios/SecaoTopo";
export default function DetalheDoUsuario() {
    return(
        <main className="w-full min-h-screen p-4">
            <SecaoTopo />
            <SecaoInformacoesUsuario />
        </main>
    )
}