import "./styleButton.css";
import "./styleCard.css";

export function Formulario() {
  return (
    <div className="contenerGeral">
      <form
        action="cadastro.php"
        autoComplete="off"
        className="ImputFormulario"
      >
        <p>
          <label htmlFor="inputTitulo">Título</label>{" "}
          <input type="text" name="titulo" id="inputTitulo"></input>
          <input
            type="submit"
            value={"-.-"}
            id="adicionarTitulo"
            className="botaoAdicionar"
          ></input>
        </p>
        <p>
          <label htmlFor="inputAutor">Autor</label>{" "}
          <input type="text" name="autor" id="inputAutor"></input>
          <input
            type="submit"
            value={"'.'"}
            id="adicionarAutor"
            className="botaoAdicionar"
          ></input>
        </p>
        <p style={{ paddingLeft: "10px" }}>
          <label htmlFor="inputAno">Ano</label>{" "}
          <input type="number" name="ano" id="inputAno"></input>
          <input
            type="submit"
            value={"'-'"}
            id="adicionarAno"
            className="botaoAdicionar"
          ></input>
        </p>
      </form>
    </div>
  );
}
