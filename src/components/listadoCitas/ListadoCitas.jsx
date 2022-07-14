import React from "react";
import { CardCita } from "../cardCita/CardCita";
import css from "./ListadoCitas.module.css";
const ListadoCitas = () => {
  return (
    <section className={css.ListaCitas}>
      <h2>Listado de Citas</h2>
      <CardCita />
      <CardCita />
      <CardCita />
      <CardCita />
      <CardCita />
    </section>
  );
};

export default ListadoCitas;
