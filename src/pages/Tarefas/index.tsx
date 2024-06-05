import TarefasInserir from "./TarefasInserir";
import TarefasLista from "./TarefasLista";

const tarefaslist = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

const Tarefas = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-[50%]">
          <h1 className="text-2xl font-medium tracking-tight">
            Lista de tarefas
          </h1>
          <span className="block border h-[1px] w-full my-2" />

          <TarefasInserir />
          <span className="block border h-[1px] w-full my-4" />

          <TarefasLista tarefas={tarefaslist} />
        </div>
      </div>
    </>
  );
};

export default Tarefas;
