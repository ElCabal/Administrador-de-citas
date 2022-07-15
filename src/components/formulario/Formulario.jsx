import React from "react";
import css from "./Formulario.module.css";
import Button from "../buttons/Button";
import { useState } from "react";
import useCitation from "../../hooks/useCitation";

const Formulario = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptomps] = useState("");
  const [error, setError] = useState(false);
  const { citations, setCitations } = useCitation();

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36).substr(2);
    return random + date;
  };
  console.log(citations);

  const handleSubmit = (e) => {
    e.preventDefault();

    //It's checking if any of the values are empty. */
    if ([name, lastName, email, date, symptoms].includes("")) {
      console.log("Debes completar todos los datos");
      setError(true);
    } else {
      console.log("Todos los campos llenos");
      setError(false);

      // It's creating an object with the values of the form.
      const citationInfo = {
        id: generateId(),
        name,
        lastName,
        email,
        date,
        symptoms,
      };

      // It's adding the new citation to the array of citations.
      setCitations([...citations, citationInfo]);

      // It's resetting the form.
      setName("");
      setLastName("");
      setEmail("");
      setDate("");
      setSymptomps("");
    }
  };

  return (
    <section>
      <h2>Agenda tus citas</h2>
      <form className={css.Formulario} onSubmit={handleSubmit}>
        <div className={css.Input}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={css.Input}>
          <label htmlFor="lastname">Apellido</label>
          <input
            id="lastname"
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={css.Input}>
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="text"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={css.Input}>
          <label htmlFor="date">Fecha</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={css.Textarea}>
          <label className={css.Label} htmlFor="symptoms">
            Sintomas
          </label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptomps(e.target.value)}
          />
        </div>
        <Button
          className={css.ButtonSubmit}
          type="submit"
          text="AGREGAR CITA"
        />
      </form>
    </section>
  );
};

export default Formulario;
