import css from "./Banner.module.css"

const Banner = ({ fondo, categoria, titulo, desc, img, color }) => {

    return <section className={css.contenedor} style={{ backgroundImage: `url(${fondo})` }}>
        <section className={css.seccion}>
            <h2 style={{ "--color": color }}>
                {categoria.nombre} 
            </h2>
            <h3>
                {titulo}
            </h3>
            <p>
                {desc}
            </p>
        </section>
        <div className={css.imagen} style={{ backgroundImage: `url(${fondo})`, "--color": color }}></div>
    </section>
}

export default Banner