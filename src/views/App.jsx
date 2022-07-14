import css from "../views/App.module.css";
import Formulario from "../components/formulario/Formulario.jsx";
import ListadoCitas from "../components/listadoCitas/ListadoCitas";

function App() {
  return (
    <main className={css.App}>
      <h1>AGENDAMIENTO DE CITAS</h1>
      <div className={css.Container}>
        <Formulario />
        <ListadoCitas />
      </div>
    </main>
  );
}

export default App;
