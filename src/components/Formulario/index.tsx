import React, { useState } from "react";
import Button from "../Button";
import style from "./Formulario.module.scss";


function Formulario() {
  const [tempo, setTempo] = useState("00:00");
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    console.log()
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input type="text" value={tarefa} onChange={evento => setTarefa(evento.target.value)} name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          tempo
        </label>
        <input type="time" value={tempo} onChange={evento => setTempo(evento.target.value)} step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}

export default Formulario;