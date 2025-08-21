// src/index.js  (React 18+)
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReferenciasInsumos from "./components/ReferenciasInsumos";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReferenciasInsumos />
  </React.StrictMode>
);
