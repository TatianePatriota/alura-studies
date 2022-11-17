import React, { useState } from "react";
import Button from "../Button";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/tarefas";

const tarefaInicial: Itarefa = {
  tarefa: '',
  tempo: '00:00'
}

function Formulario({setTarefas}: {setTarefas:React.Dispatch<React.SetStateAction<Itarefa[]>>}) {
  const [tarefa, setTarefa] = useState<Itarefa>(tarefaInicial);

  function adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [...tarefasAntigas, tarefa])
    setTarefa(tarefaInicial)
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input type="text" value={tarefa.tarefa} onChange={evento => setTarefa(tarefasAntigas => ({ ...tarefasAntigas, tarefa: evento.target.value }))} name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          tempo
        </label>
        <input type="time" value={tarefa.tempo} onChange={evento => setTarefa(tarefasAntigas => ({ ...tarefasAntigas, tempo: evento.target.value }))} step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Formulario;