import { Button, List, ListItem } from "@chakra-ui/react";
import { useEffect } from "react";

interface Tarefa {
  id: number;
  title: string;
  completed: boolean;
}

interface TarefasListaProps {
  tasks: Tarefa[];
  atualizarTarefas: () => void;
}
const TarefasLista = ({ tasks, atualizarTarefas }: TarefasListaProps) => {
  function deletaTarefa(id: number) {
    fetch(`https://workshop-node-ts-intro-exemplo1.onrender.com/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => atualizarTarefas());
  }

  useEffect(() => {
    atualizarTarefas();
  }, []);

  return (
    <List className="w-full flex flex-col gap-2">
      {tasks.map((task, index) => {
        return (
          <ListItem
            key={index}
            className="flex justify-between items-center bg-blue-100 pl-4 pr-2 py-2 rounded-md"
          >
            <h1>{task.title}</h1>
            <div className="flex justify-center items-center gap-2">
              <Button colorScheme="red">Pendente</Button>
              <Button onClick={() => deletaTarefa(task.id)} colorScheme="red">
                Excluir
              </Button>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TarefasLista;
