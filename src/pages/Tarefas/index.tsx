import { useState } from "react";
import TarefasInserir from "./TarefasInserir";
import TarefasLista from "./TarefasLista";

interface Tarefa {
  id: number;
  title: string;
  completed: boolean;
}

const Tarefas = () => {
  const [tasks, setTasks] = useState<Tarefa[]>([]);

  function atualizarTarefas() {
    fetch("https://workshop-node-ts-intro-exemplo1.onrender.com/task")
      .then((dados) => dados.json())
      .then((tarefas) => setTasks(tarefas));
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-[50%]">
          <h1 className="text-2xl font-medium tracking-tight">
            Lista de tarefas
          </h1>
          <span className="block border h-[1px] w-full my-2" />

          <TarefasInserir atualizarTarefas={atualizarTarefas} />
          <span className="block border h-[1px] w-full my-4" />

          <TarefasLista tasks={tasks} atualizarTarefas={atualizarTarefas} />
        </div>
      </div>
    </>
  );
};

export default Tarefas;
