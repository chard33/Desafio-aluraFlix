

import Carta from '../Carta/Carta'
import css from './ContCartas.module.css'

const ContCartas = ({ cartas, categoria, color, eliminarCarta, abrirModal }) => {

    return (
        <div className={css.contenedor}>
            <p style={{ "--color": color }}>{categoria}</p>
            <section className={css.funciones}>
                {cartas.map(carta => <Carta key={carta.id} carta={carta} color={color} eliminarCarta={eliminarCarta} abrirModal={abrirModal}/>)}
            </section>
        </div>
    )
}

export default ContCartas