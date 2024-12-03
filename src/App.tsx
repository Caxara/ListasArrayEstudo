// import Todos from "./assets/Exercicio1/Todos";
// import WhoIsWho from "./assets/Exercicio3/WhoIsWho";
// import OnOff from "./Exercicio2/OnOff";
// import ListaLivro from "./assets/ListaLivro/ListagemCompleta";

import { useState } from "react";
import { ExercicioInput } from "./Exercicio 4/ExercicioInput";
import { Titulo } from "./Exercicio 4/Titulo";

export default function App() {
  const [valorInput, setvalorInput] = useState("1235");

  return (
    <>
      {/* <ListaLivro /> */}
      <ExercicioInput valorInput={valorInput} setvalorInput={setvalorInput} />
      <Titulo textoTitulo={valorInput} />
    </>
  );
}
