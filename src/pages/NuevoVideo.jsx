import conex from "../api/ConexionBD";
import CompInput from "../Components/CompInput/CompInput"
import css from "./NuevoVideo.module.css"
import React, { useState } from "react";

const NuevoVideo = ({ className, actualizarCartas }) => {

    const estadoInicial = {
        titulo: "",
        descripcion: "",
        imagen: "",
        video: "",
        categoria: "",
        favorito: false
    };

    const [formD, setformD] = useState(estadoInicial);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setformD({
            ...formD,
            [id]: value,
        });
    };

    const limpiarFormulario = () => {
        setformD(estadoInicial);
    };

    const validarD = (e) => {
        const { id, value } = e.target;
        const color = formD[id].length !== 0 ? "#7e7e7e" : "#ff0000"
        e.target.style.borderColor = color
    }

    const agregarVideo = async () => {
        try {
            const datos = await conex(`https://fake-api-a-flix.vercel.app/videos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formD),
            });


        } catch (error) {
            console.error("Error al agregar video:", error);
        }

        limpiarFormulario()
        actualizarCartas()
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        agregarVideo()
    };

    return (
        <div className={`${className} ${css.contenedor}`}>
            <h1>NUEVO VIDEO</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <hr />
            <h2>Crear Tarjeta</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <CompInput
                    lb="Título"
                    id="titulo"
                    ph="ingrese el título"
                    value={formD.titulo}
                    handleChange={handleChange}
                    validarD={validarD}
                />
                <section>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={formD.categoria}
                        onChange={handleChange}
                        className={css.selectF}
                        onBlur={validarD}
                        required
                    >
                        <option value="" disabled>
                            Selecciona una opción
                        </option>
                        <option value="FRONT END">Front End</option>
                        <option value="BACK END">Back End</option>
                        <option value="INNOVACION Y GESTION">Innovacion y gestion</option>
                    </select>
                </section>
                <CompInput lb="Imagen" ph="ingrese el obligatorio"
                    value={formD.imagen}
                    id="imagen"
                    handleChange={handleChange}
                    validarD={validarD}
                />
                <CompInput lb="Video" ph="ingrese el enlace del video"
                    value={formD.video}
                    id="video"
                    handleChange={handleChange}
                    validarD={validarD}
                />
                <section>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea
                        id="descripcion"
                        value={formD.descripcion}
                        onChange={handleChange}
                        className={css.textareaF}
                        onBlur={validarD}
                        rows="4"
                        cols="50"
                        placeholder="lOREM iPSUM BLAH BLAH BLAH"
                        required
                    ></textarea>
                </section>
                <div className={css.buttonContainerF}>
                    <button type="submit" className={css.buttonR}>
                        Guardar
                    </button>
                    <button type="button" onClick={limpiarFormulario} className={css.buttonL}>
                        Limpiar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NuevoVideo