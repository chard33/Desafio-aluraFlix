import conex from "../../api/ConexionBD";
import css from "./CompForm.module.css"
import React, { useEffect, useState } from "react";

const Formulario = ({ id, setCartas }) => {

    const estadoInicial = {
        titulo: "",
        descripcion: "",
        imagen: "",
        video: "",
        categoria: "",
        favorito: false
    };

    const [formD, setformD] = useState(estadoInicial);
    const [datosOriginales, setDatosOriginales] = useState({});

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
        const color = formD[id].length !== 0 ? "#2271D1" : "#ff0000"
        e.target.style.borderColor = color
    }

    const actualizarRegistro = async (id, cambios) => {

        const respuesta = await conex(`https://fake-api-a-flix.vercel.app/videos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cambios),
        });

        setCartas((prevCartas) =>
            prevCartas.map((carta) =>
                carta.id === id ? { ...carta, ...respuesta } : carta
            )
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cambios = {};
        for (const clave in formD) {
            if (formD[clave] !== datosOriginales[clave]) {
                cambios[clave] = formD[clave];
            }
        }

        if (Object.keys(cambios).length > 0) {
            await actualizarRegistro(id, cambios);
            alert("Datos actualizados con éxito.");
        } else {
            alert("No se realizaron cambios.");
        }
    };

    useEffect(() => {
        const cargarDatos = async () => {

            const datos = await conex(`https://fake-api-a-flix.vercel.app/videos/${id}`)

            setformD(datos); 
            setDatosOriginales(datos)
        };
        cargarDatos();
    }, [id]);


    return (
        <form onSubmit={handleSubmit} className={css.formF}>
            <label htmlFor="titulo">Título</label>
            <input
                type="text"
                id="titulo"
                placeholder="¿qué es javascript?"
                autoFocus
                value={formD.titulo}
                onChange={handleChange}
                onBlur={validarD}
                required
                className={css.inputF}
            />
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
            <label htmlFor="imagen">Imagen</label>
            <input
                type="text"
                id="imagen"
                placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
                value={formD.imagen}
                onChange={handleChange}
                className={css.inputF}
                onBlur={validarD}
                required
            />
            <label htmlFor="video">Video</label>
            <input
                type="text"
                id="video"
                placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
                value={formD.video}
                onChange={handleChange}
                className={css.inputF}
                onBlur={validarD}
                required
            />
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
            <div className={css.buttonContainerF}>
                <button type="button" onClick={limpiarFormulario} className={css.buttonL}>
                    Limpiar
                </button>
                <button type="submit" className={css.buttonR}>
                    Registrar
                </button>
            </div>
        </form>
    );
};

export default Formulario;