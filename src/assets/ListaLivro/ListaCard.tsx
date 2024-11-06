import "./styleCard.css";

/*Modelagem das informações principais do app */
export type listagem = {
  titulo: string;
  autor: string;
  ano: number;
  lido: boolean;
  id: number;
};
/*Criação do card que exibirá a lista*/

export function CardLista(props: { livros: listagem }) {
  const { titulo, autor, ano, lido } = props.livros;
  const statusColor = lido ? "rgb(0, 255, 229)" : "gray";

  return (
    <div className="card">
      <h2 className="tituloLivro">
        <span
          className="bolinhaStatus"
          style={{ backgroundColor: statusColor }}
        ></span>
        {titulo}
      </h2>
      <h3 className="autor"> - {autor}</h3>
      <p className="ano">({ano})</p>
    </div>
  );
}
