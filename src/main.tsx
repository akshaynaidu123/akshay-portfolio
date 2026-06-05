import React from "react";
import ReactDOM from "react-dom/client";
// Explicitly include the file extension so module resolution finds App when
// "./App" without extension cannot be resolved by the environment.
import App from "./App.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);