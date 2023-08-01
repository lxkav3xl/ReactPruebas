import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Gretting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter(){
  const [counter, setCounter] = useState(0)
  return <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => {
      setCounter(counter + 10)
    }}>Sumar</button>
  </div>
}

root.render(
  <>
    <Counter/>
  </>
);
