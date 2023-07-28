import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Gretting";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Santiago Martinez",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Diego Mesa",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return <h1 key={i}>{user.name}</h1>;
    })}
  </>
);
