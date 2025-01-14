
import css from "./Carta.module.css"
import logoB from "../../assets/logo-bor.png"
import logoE from "../../assets/logo-edi.png"

const Carta = ({ carta, color, eliminarCarta, abrirModal }) => {

    return (
        <div className={css.carta} style={{ "--color": color }}>
            <div className={css.conImagen} style={{ backgroundImage: `url(${carta.imagen})`, "--color": color }}>
                <a className={css.enlaceV} href={carta.video} target="_blank"></a>
            </div>
            <section>
                <a onClick={() => eliminarCarta(carta.id)}><img className={css.logo} src={logoB} alt="Logo borrar" />BORRAR</a>
                <a onClick={() => abrirModal(carta.id)}><img className={css.logo} src={logoE} alt="Logo edit" />EDITAR</a>
            </section>
        </div>
    )
}

export default Carta