import { useState } from "react";
import { ListaDeLivros } from "./ArrayLivros";
import { CardLista } from "./ListaCard";
import "./styleCard.css";
import "./styleButton.css";
import { inclusaoLivros } from "./InclusaoLivros";

//Criando a listagem completa da lista
export function ListandoTudo() {
  //Estado para mostrar a visibilidade da lista
  const [filtroLista, setfiltroLista] = useState<
    "todos" | "lidos" | "nao-lido" | "vazio"
  >("vazio");

  const aplicarFiltro = (filtro: "todos" | "lidos" | "nao-lido" | "vazio") => {
    if (filtroLista === filtro) {
      setfiltroLista("vazio");
    } else {
      setfiltroLista(filtro);
    }
  };

  return (
    <div className="contenerGeral">
      <div>
        <h1 className="minhaBiblioTitulo">Biblioteca-Me</h1>
        <form className="ImputFormulario">
          <p>
            Título <input type="text" name="titulo" id="inputTitulo"></input>
            <input
              type="submit"
              value={"-.-"}
              id="adicionarTitulo"
              className="botaoAdicionar"
            ></input>
          </p>
          <p>
            Autor <input type="text" name="autor" id="inputAutor"></input>
            <input
              type="submit"
              value={"'.'"}
              id="adicionarAutor"
              className="botaoAdicionar"
            ></input>
          </p>
          <p>
            Ano <input type="number" name="ano" id="inputAno"></input>
            <input
              type="submit"
              value={"'-'"}
              id="adicionarAno"
              className="botaoAdicionar"
            ></input>
          </p>
        </form>
      </div>
      <div className="contener-Botao-Lista">
        <div className="contenerBotaoStatus">
          {/*botão para a exibição da lista completa*/}
          <button
            className="botaoLista"
            type="button"
            onClick={() => {
              aplicarFiltro("todos");
            }}
          >
            L i s t a
          </button>
          {/*Botão para exibir os livros lidos */}
          <button
            className="botaoLido"
            type="button"
            onClick={() => {
              aplicarFiltro("lidos");
            }}
          >
            L i d o
          </button>
          {/*Botão para exibir os livros não lidos*/}
          <button
            className="botaoNaoLido"
            type="button"
            onClick={() => {
              aplicarFiltro("nao-lido");
            }}
          >
            N ã o L i d o
          </button>
        </div>
        {/*Renderiza a lista de livros completa */}
        <div className="boxCard">
          {/*bloco da lógica condicional faazendo a triagem para renderizar na tela */}
          {ListaDeLivros.filter((listagem) => {
            if (filtroLista === "vazio") return false;
            if (filtroLista === "todos") return true;
            if (filtroLista === "lidos" && listagem.lido) return true;
            if (filtroLista === "nao-lido" && !listagem.lido) return true;

            return false;
          }).map((listagem) => (
            <CardLista livros={listagem} key={listagem.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ListandoTudo;
