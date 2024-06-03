import { Link } from "react-router-dom";
import Separator from "../../Separator/Separator";

const Tarefas = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-fit flex flex-col justify-center items-center gap-2">
        <ul>
          <li className="list-disc">Tarefa 1</li>
          <li className="list-disc">Tarefa 2</li>
          <li className="list-disc">Tarefa 3</li>
          <li className="list-disc">Tarefa 4</li>
          <li className="list-disc">Tarefa 5</li>
        </ul>
        <Separator />
        <Link to="/" className="text-blue-700 underline">
          Página inicial
        </Link>
      </div>
    </div>
  );
};

export default Tarefas;
