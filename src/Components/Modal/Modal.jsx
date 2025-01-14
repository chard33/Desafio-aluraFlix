import React from "react";
import css from "./Modal.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Formulario from "../CompForm/CompForm";

const Modal = ({ id, cerrarModal, setCartas}) => {

  return (
    <div className={css.fondoM} >
      <dialog open className={css.modal}>
        <button className={css.botonC} onClick={() => cerrarModal()}><IoMdCloseCircleOutline color="white" /></button>
        <h1>EDITAR CARTA:</h1>
          <Formulario id={id} setCartas={setCartas}/>
      </dialog>
    </div>
  );
}

export default Modal;
