import { useState } from "react";
import { ListaDeLivros } from "./ArrayLivros";
import { CardLista } from "./ListaCard";
import "./styleCard.css";
import "./styleButton.css";

//Criando a listagem completa da lista
export function ListandoTudo() {
  //Estado para mostrar a visibilidade da lista
  const [mostrarListaCheia, setMostrarListaCheia] = useState(false);
  const [mostrarListaLida, setMostrarListaLida] = useState(false);
  const [mostrarListaNaoLida, setMostrarListaNaoLida] = useState(false);

  //Função para alternar a visibilidade da lista
  const alternarLista = () => {
    setMostrarListaCheia(!mostrarListaCheia);

    if (mostrarListaLida) setMostrarListaLida(false);
    if (mostrarListaNaoLida) setMostrarListaNaoLida(false);
  };

  const alternarLivrosLidos = () => {
    setMostrarListaLida(!mostrarListaLida);
    if (mostrarListaCheia) setMostrarListaCheia(false);
    if (mostrarListaNaoLida) setMostrarListaNaoLida(false);
  };
  const alternarLivrosNaoLidos = () => {
    setMostrarListaNaoLida(!mostrarListaNaoLida);
    if (mostrarListaCheia) setMostrarListaCheia(false);
    if (mostrarListaLida) setMostrarListaLida(false);
  };

  return (
    <div>
      <h1 className="minhaBiblioTitulo">Biblioteca-Me</h1>
      <div className="boxBotoes">
        {/*botão para a exibição da lista completa*/}
        <button className="botaoLista" type="button" onClick={alternarLista}>
          Lista
        </button>
        {/*Botão para exibir os livros lidos */}
        <button
          className="botaoLido"
          type="button"
          onClick={alternarLivrosLidos}
        >
          Lido
        </button>
        {/*Botão para exibir os livros não lidos*/}
        <button
          className="botaoNaoLido"
          type="button"
          onClick={alternarLivrosNaoLidos}
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
        {mostrarListaCheia && (
          <div>
            {ListaDeLivros.map((listagem) => {
              return <CardLista livros={listagem} key={listagem.id} />;
            })}
          </div>
        )}
        {/*Renderizar a lista de livros lidos */}
        {mostrarListaLida && (
          <div>
            {ListaDeLivros.filter((listagem) => listagem.lido).map(
              (listagem) => (
                <CardLista livros={listagem} key={listagem.id} />
              )
            )}
          </div>
        )}
        {/*Renderizar a lista de livros não lidos */}
        {mostrarListaNaoLida && (
          <div>
            {ListaDeLivros.filter((listagem) => !listagem.lido).map(
              (listagem) => (
                <CardLista livros={listagem} key={listagem.id} />
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default ListandoTudo;
