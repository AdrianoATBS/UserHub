"use client"
import Filtro from "../../components/BuscarUsuario/Filtro";
import Titulo from "../../components/BuscarUsuario/Titulo";
import CardUsuario from "../../components/BuscarUsuario/CardUsuario";
import { userService } from "../../services/userService";
import { useEffect, useState } from "react";
export default function BuscaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const dados = await userService();
                setUsuarios(dados);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUsuarios();
    }, []);
    
    return(
        <main className="w-full min-h-screen  ">
            <section className="bg-linear-to-r from-[#F5F0E6] to-verde-leve/50  ">
                <Titulo />
                <Filtro />
            </section>

            <section className="bg-[#F5F0E6]">
                <CardUsuario usuarios={usuarios}/>
            </section>

        </main>
    )
}