import { useState } from "react";

export default function App() {
  const [contador, setarContador] = useState(0);

  function adicionar() {
    setarContador(contador + 1);
  }
  function subtrair() {
    setarContador(contador - 1);
  }

  return (
    <>
      <h1>{contador}</h1>
      <button onClick={adicionar}>+</button>
      <button onClick={subtrair}>-</button>
    </>
  );
}
