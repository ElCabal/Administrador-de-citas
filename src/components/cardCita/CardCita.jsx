import React from "react";
import css from "./CardCita.module.css";
export const CardCita = ({ citation }) => {
  const { name, lastName, email, date, symptoms } = citation;
  return (
    <div className={css.card_cita}>
      <p>
        Nombre:<span>{name}</span>
      </p>
      <p>
        Apellido:<span>{lastName}</span>
      </p>
      <p>
        Correo:<span>{email}</span>
      </p>
      <p>
        Fecha:<span>{date}</span>
      </p>
      <p>
        Sintomas:<span>{symptoms}</span>
      </p>
    </div>
  );
};
