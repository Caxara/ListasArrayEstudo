import { useState } from "react";
import { ListaDeLivros } from "./ArrayLivros";
import { CardLista } from "./ListaCard";
import "./styleCard.css";
import "./styleButton.css";

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
    <div>
      <h1 className="minhaBiblioTitulo">Biblioteca-Me</h1>
      <div className="boxBotoes">
        {/*botão para a exibição da lista completa*/}
        <button
          className="botaoLista"
          type="button"
          onClick={() => {
            aplicarFiltro("todos");
          }}
        >
          Lista
        </button>
        {/*Botão para exibir os livros lidos */}
        <button
          className="botaoLido"
          type="button"
          onClick={() => {
            aplicarFiltro("lidos");
          }}
        >
          Lido
        </button>
        {/*Botão para exibir os livros não lidos*/}
        <button
          className="botaoNaoLido"
          type="button"
          onClick={() => {
            aplicarFiltro("nao-lido");
          }}
        >
          Não Lido
        </button>
        {/*input para adicionar novo livro na lista, "falta acrescentar o value={} e o onChange={}*/}
        <input
          className="inputNovoLivro"
          type="text"
          placeholder="Título do novo livro"
        />
        {/*falta acrescentar ao código o "onClick={}" */}
        <button className="botaoAdicionar">Novo</button>{" "}
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
  );
}
export default ListandoTudo;
