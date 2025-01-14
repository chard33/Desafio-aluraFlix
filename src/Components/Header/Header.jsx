import { v4 as uuid } from "uuid"
import CompBoton from "../CompBoton/CompBoton"
import fondo from "../../assets/Logo.png"
import css from "./Header.module.css"
import { useState } from "react"

const Header = ({ className }) => {

    const logo = "/assets/Logo.png";

    const [estadoB, setEstadoB] = useState(true)

    return <header className={`${css.SeccionHeader} ${className}`}>
        <img src={fondo} alt="Logo-AluraFlix" />
        <nav>
            <CompBoton nombre="HOME" dir="/"
                color={`${estadoB ? "activo" : "inactivo"}`} setEstadoB={setEstadoB} />
            <CompBoton nombre="NUEVO VIDEO" dir="/NVideo"
                color={`${!estadoB ? "activo" : "inactivo"}`} setEstadoB={setEstadoB} />
        </nav>
    </header>
}

export default Header