
import css from "./Footer.module.css"
import fondo from "../../assets/Logo.png"

const Footer = ({className}) => {
    return <footer className={`${css.footer} ${className}`}>
        <img src={fondo} alt="Logo-AluraFlix" />
    </footer>
}

export default Footer