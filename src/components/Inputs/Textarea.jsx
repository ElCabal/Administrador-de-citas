import React from "react";
import css from "./Textarea.module.css";

export const Textarea = ({ htmlFor, id, texto }) => {
  return (
    <div className={css.Textarea}>
      <label className={css.Label} htmlFor={htmlFor}>
        {texto}
      </label>
      <textarea id={id} />
    </div>
  );
};
