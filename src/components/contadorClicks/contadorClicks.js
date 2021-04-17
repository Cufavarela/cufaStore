import React, { useState } from "react";
import "./style.css";
import Boton from "./Boton";
import Fecha from "./Fecha";

export function ContadorClicks() {
  const [numero, setNumero] = useState(0);
  const [fecha, setFecha] = useState("");

  return (
    <div>
      <h1>Contador de clicks!</h1>
      <Boton numero={numero} setNumero={setNumero} setFechaDeClick={setFecha} />
      <p className="numeroFinal">{numero}</p>
      {fecha ? (
        <>
          <p>Fecha del último click</p>
          <Fecha fechaDeClick={fecha} />
        </>
      ) : null}
    </div>
  );
}
