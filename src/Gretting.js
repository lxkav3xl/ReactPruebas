export function Greeting({tittle, name="User"}) {
  console.log(tittle, name);
  return <h1>{tittle}, dice {name}</h1>;
}

export function UserCard({name, amount, married, adress, greet}) {
  console.log(name, amount, married, adress, greet)
  return <div>
    <h1>{name}</h1>
    <p>💵 {amount}</p>
    <p>{married ? 'Casado' : 'Soltero'}</p>
    <ul>
        <li>Direccion: {adress.street}</li>
        <li>Cuidad: {adress.city}</li>
    </ul>
  </div>;
}
