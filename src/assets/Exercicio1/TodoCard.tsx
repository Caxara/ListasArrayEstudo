// modelando a informação principal do app: o todo
export type Todo = {
  titulo: string;
  concluido: boolean;
  id: number;
};

// criador de cards de todos
export function TodoCard(props: { item: Todo }) {
  // let corBolinha = "";

  // if (props.item.concluido === true) {
  //   corBolinha = "green";
  // } else {
  //   corBolinha = "yellow";
  // }

  // const corBolinha = props.item.concluido ? "green" : "yellow";

  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "5px",
        boxShadow: "2px 2px blur",
      }}
    >
      <h3>
        {props.item.titulo}

        {/* bolinha indicadora de status concluido */}
        <span
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            borderRadius: "50px",
            backgroundColor: props.item.concluido ? "green" : "yellow",
          }}
        ></span>
      </h3>
    </div>
  );
}
