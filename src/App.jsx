import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import css from "./App.module.css"
import PaginaPrincipal from "./pages/PaginaPrincipal"
import NuevoVideo from "./pages/NuevoVideo"
import PaginaError from "./pages/PaginaError"
import { useEffect, useState } from "react"
import conex from "./api/ConexionBD"
import Modal from "./Components/Modal/Modal"

function App() {

  const [cartas, setCartas] = useState([])
  const [categorias, setCategorias] = useState([])
  const [estadoModal, setEstadoModal] = useState({ id: 0, estado: false });

  const obtenerCartas = async () => {
    const datCar = await conex("https://fake-api-a-flix.vercel.app/videos");
    setCartas(datCar);
    const datCat = await conex("https://fake-api-a-flix.vercel.app/categorias");
    setCategorias(datCat);
  };

  useEffect(() => {

    obtenerCartas();

  }, [])

  const eliminarCarta = async (id) => {
    const data = await conex(`https://fake-api-a-flix.vercel.app/videos/${id}`, {
      method: "DELETE",
    });

    setCartas(cartas.filter(carta => carta.id !== id))
  }

  const abrirModal = (id) => {
    setEstadoModal({ id: id, estado: true })
  }

  const cerrarModal = () => {
    setEstadoModal({ id: 0, estado: false })

  }

  return (
    <div className={css.contenedor} >
      <Header className={css.header} />
      <Routes >
        <Route path="/" element={<PaginaPrincipal className={css.main} categorias={categorias} cartas={cartas} eliminarCarta={eliminarCarta} abrirModal={abrirModal} />} />
        <Route path="/NVideo" element={<NuevoVideo className={css.main} actualizarCartas={obtenerCartas} />} />
        <Route path="*" element={<PaginaError className={css.main} />} />
      </Routes>
      {estadoModal.estado && <Modal id={estadoModal.id} cerrarModal={cerrarModal} setCartas={setCartas} />}
      <Footer />
    </div>
  )
}

export default App
