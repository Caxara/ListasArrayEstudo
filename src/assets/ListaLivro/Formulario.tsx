import "./styleButton.css";
import "./styleCard.css";

export function Formulario(props: {
  tituloInicial: string;
  NomeAutor: string;
  DataAno: number;
}) {
  return (
    <div>
      <form
        action="cadastro.php"
        method="GET"
        autoComplete="off"
        className="ImputFormulario"
      >
        <p>
          <label htmlFor="inputTitulo">Título</label>{" "}
          <input
            type="text"
            name="titulo"
            id="inputTitulo"
            value={props.tituloInicial}
          ></input>
          <input
            type="submit"
            id="adicionarTitulo"
            className="botaoAdicionar"
          ></input>
        </p>
        <p>
          <label htmlFor="inputAutor">Autor</label>{" "}
          <input
            type="text"
            name="autor"
            id="inputAutor"
            value={props.NomeAutor}
          ></input>
          <input
            type="submit"
            id="adicionarAutor"
            className="botaoAdicionar"
          ></input>
        </p>
        <p style={{ paddingLeft: "10px" }}>
          <label htmlFor="inputAno">Ano</label>{" "}
          <input
            type="number"
            name="ano"
            id="inputAno"
            value={props.DataAno}
          ></input>
          <input
            type="submit"
            id="adicionarAno"
            className="botaoAdicionar"
          ></input>
        </p>
      </form>
    </div>
  );
}
