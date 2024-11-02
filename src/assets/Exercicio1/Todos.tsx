import { listaDeItens } from "./fake-todos";
import { TodoCard } from "./TodoCard";

// Listador de todos
function Todos() {
  return (
    <div>
      {listaDeItens.map((todo) => {
        return <TodoCard item={todo} />;
      })}
    </div>
  );
}

export default Todos;

// exemplo de um todo
/* const todo1: Todo = {
  titulo: "terminar app todo",
  id: 1,
  concluido: false,
}; */
