import { Link } from "react-router-dom"
import css from "./CompBoton.module.css"

const Boton = ({ nombre, dir, color, setEstadoB }) => {

    const cambiarEstado= () => {
        setEstadoB(prev => color === "inactivo" ? !prev : prev)
      };

    return <Link to={dir} onClick={cambiarEstado} className={`${css.boton} ${css[color]}`}>
        {nombre}
    </Link>
}

export default Boton