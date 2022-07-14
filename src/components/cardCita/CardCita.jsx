import React from "react";
import css from "./CardCita.module.css";
export const CardCita = () => {
  return (
    <div className={css.card_cita}>
      <p>
        Nombre:<span></span>
      </p>
      <p>
        Apellido:<span></span>
      </p>
      <p>
        Correo:<span></span>
      </p>
      <p>
        Fecha:<span></span>
      </p>
      <p>
        Sintomas:<span></span>
      </p>
    </div>
  );
};
