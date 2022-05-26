import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/global.css";
import Home from "./pages/Home/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
