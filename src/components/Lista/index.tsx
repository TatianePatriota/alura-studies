import Item from "./Item";
import style from "./Lista.module.scss";
import { Itarefa } from "../../types/tarefas";

interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Lista de estudos:</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;