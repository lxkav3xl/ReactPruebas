import { useState } from "react";
export function Button({ text = "Vacio" }) {
  return (
    <button type="button" id="btnAvanzar" class="btn-block btn-lg btn-primary">
      {text}
    </button>
  );
}

export function Caja({ text }) {
  return <input type="text" class="form-control" placeholder={text}></input>;
}

export function Numero({text}) {
  function generarAleatiorio() {
    const n = Math.trunc(Math.random() * 10);
    setNumero(n);
  }
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <p>El numero generado es: {numero}</p>
      <button onClick={generarAleatiorio}>{text}</button>
    </div>
  );
}
