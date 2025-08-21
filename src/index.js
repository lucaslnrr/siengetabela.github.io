// src/index.js (React 18+)
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReferenciasInsumos from "./components/ReferenciasInsumos";

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <React.StrictMode>
    <ReferenciasInsumos />
  </React.StrictMode>
);
