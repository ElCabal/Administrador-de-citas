import React from "react";
import { CardCita } from "../cardCita/CardCita";
import css from "./ListadoCitas.module.css";
import useCitation from "../../hooks/useCitation";
const ListadoCitas = () => {
  const { citations } = useCitation();
  return (
    <section className={css.ListaCitas}>
      <h2>Listado de Citas</h2>
      {citations.map((citation) => {
        return <CardCita key={citation.id} citation={citation} />;
      })}
    </section>
  );
};

export default ListadoCitas;
