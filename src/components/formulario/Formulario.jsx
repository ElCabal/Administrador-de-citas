import React from "react";
import css from "./Formulario.module.css";
import { Input } from "../Inputs/Input";
import { Textarea } from "../Inputs/Textarea";
import Button from "../buttons/Button";

const Formulario = () => {
  return (
    <section>
      <h2>Agenda tus citas</h2>
      <form className={css.Formulario}>
        <Input
          htmlFor={"nombre"}
          id={"nombre"}
          type={"text"}
          texto={"Nombre"}
        />
        <Input
          htmlFor={"apellido"}
          id={"apellido"}
          type={"text"}
          texto={"Apellido"}
        />
        <Input
          htmlFor={"correo"}
          id={"correo"}
          type={"email"}
          texto={"Correo"}
        />
        <Input htmlFor={"fecha"} id={"fecha"} type={"date"} texto={"Fecha"} />
        <Textarea htmlFor={"sintomas"} id={"sintomas"} texto={"Sintomas"} />
        <Button className={css.ButtonSubmit} text="AGREGAR CITA" />
      </form>
    </section>
  );
};

export default Formulario;
