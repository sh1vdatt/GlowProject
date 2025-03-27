import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
// Initialize Firebase
import "./lib/firebase.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
