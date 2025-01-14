

import fondo from "../assets/Logo.png"
import Banner from "../Components/Banner/Banner"
import ContCartas from "../Components/ContCartas/ContCartas"

const PaginaPrincipal = ({ className, cartas, categorias, eliminarCarta, abrirModal }) => {

    const cargarCartas = () => categorias
        .filter(categoria => cartas.some(carta => carta.categoria === categoria.categoria)) // Filtra categorías con cartas
        .map(categoria => (
            <ContCartas
                key={categoria.id}
                categoria={categoria.categoria}
                color={categoria.color}
                cartas={cartas.filter(carta => carta.categoria === categoria.categoria)}
                eliminarCarta={eliminarCarta}
                abrirModal={abrirModal}
            />
        ))


    return (
        <div className={`${className}`}>

            {cartas.filter(carta => carta === (cartas.find(c => c.favorito) || cartas[0]))
                .map(carta => <Banner
                    fondo={carta.imagen}
                    titulo={carta.titulo}
                    categoria={{ nombre: carta.categoria }}
                    desc={carta.descripcion}
                    img={carta.url} key={carta.id}
                    color={categorias.find(cat => cat.categoria === carta.categoria)?.color} />)
            }
            {
                cartas.length > 0 ? (
                    cargarCartas()
                ) : (
                    <div style={{
                        color: "#ffffff",
                        fontSize: "33px",
                        textAlign: "center",
                        margin: "33px auto"
                    }}>Sin videos registrados</div>
                )
            }
        </div >
    )
}

export default PaginaPrincipal