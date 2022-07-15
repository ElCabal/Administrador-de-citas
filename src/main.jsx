import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/views/App";
import css from "./index.css";
import { CitationProvider } from "./context/citationProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitationProvider>
      <App />
    </CitationProvider>
  </React.StrictMode>
);
