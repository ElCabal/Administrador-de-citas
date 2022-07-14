import React from "react";
import css from "./input.module.css";
export const Input = ({ htmlFor, texto, id, type, placeholder }) => {
  return (
    <div className={css.Input}>
      <label htmlFor={htmlFor}>{texto}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};
