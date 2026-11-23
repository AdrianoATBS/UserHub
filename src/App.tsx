import { Header } from "./components/Header"
import { Routes, Route } from "react-router-dom"
import BuscaDeUsuarios from "./app/buscaDeUsuarios/page"
import DetalheDoUsuario from "./app/detalheDoUsuario/page"
function App() {

  return (
    <div>
      <Header />

      <div className="w-full mx-auto  ">
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/buscaDeUsuarios" element={<BuscaDeUsuarios />} />
          <Route path="/detalheDoUsuario/:id" element={<DetalheDoUsuario />} />
        </Routes>
      </div>
    </div>
  )
}


export default App
