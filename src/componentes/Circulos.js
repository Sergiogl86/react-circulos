import "./circulos.css";
import { useState } from "react";

function Circulo({ key }) {
  const [clase, setClase] = useState("circulo--red");

  const cambioClase = function () {
    setClase(clase === "circulo--red" ? "circulo--blue" : "circulo--red");
  };
  return <div key={key} onClick={cambioClase} className={clase}></div>;
}

export default Circulo;
