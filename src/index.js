import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Gretting";
import Product, { NavBar } from "./Product";
import { Button, Caja, Numero } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div>
      <Caja text="Ingresar Nombre" />
    </div>
    <div>
      <Caja text="Ingresar Cedula" />
    </div>
    <Numero text="Generar turno" />

    {/* <UserCard
      name="Santiago Martinez"
      amount={3000}
      married={false}
      points={[53.2, 96.4, 20.7]}
      adress={{ street: "Calle 42", city: "Laureles" }}
      greet={function () {
        alert("Has ingresado");
      }}
    />

    <UserCard
      name="Franci Giraldo"
      amount={500000}
      married={true}
      points={[20, 85]}
      adress={{ street: "Carrera 64", city: "Conquistadores" }}
    />

    <UserCard
      name="Alejandra Londoño"
      amount={2000000}
      married={false}
      points={[28, 45]}
      adress={{ street: "Calle 10A", city: "Poblado" }}
    /> */}
  </>
);
