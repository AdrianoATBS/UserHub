import { Header } from "./components/Header"
import { Routes, Route } from "react-router-dom"
import BuscaDeUsuarios from "./app/buscaDeUsuarios/page"
import DetalheDoUsuario from "./app/detalheDoUsuario/page"
function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/buscaDeUsuarios" element={<BuscaDeUsuarios />} />
        <Route path="/detalheDoUsuario" element={<DetalheDoUsuario />} />
      </Routes>
    </main>
  )
}


export default App
