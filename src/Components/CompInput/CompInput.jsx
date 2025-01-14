
import css from "./CompInput.module.css"

const CompInput = ({ lb, ph, id, value, handleChange, validarD }) => {
    return (
        <section className={css.contenedor}>
            <label htmlFor={id}>
                {lb}
            </label>
            <input required type="text" placeholder={ph} id={id} value={value}
                onChange={handleChange}
                onBlur={validarD} />
        </section>
    )
}

export default CompInput