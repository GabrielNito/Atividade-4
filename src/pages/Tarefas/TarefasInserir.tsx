import { Button, Checkbox, Input } from "@chakra-ui/react";
import { useState } from "react";

interface TarefasInserirProps {
  atualizarTarefas: () => void;
}

const TarefasInserir = ({ atualizarTarefas }: TarefasInserirProps) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleSubmit(event: any) {
    event.preventDefault();
    const data = {
      title,
      completed,
    };
    fetch("https://workshop-node-ts-intro-exemplo1.onrender.com/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => atualizarTarefas());
  }

  return (
    <div>
      <h2 className="text-lg font-medium tracking-tight">
        Inserir nova tarefa
      </h2>

      <form onSubmit={handleSubmit} className="flex justify-center gap-2 mt-2">
        <Input
          onChange={(event: any) => {
            setTitle(event.target.value);
          }}
          type="text"
          name="tarefa"
          placeholder="Digite o título da task"
        />
        <Checkbox
          onChange={(event: any) => setCompleted(event.target.value)}
          name="completed"
        >
          Realizada?
        </Checkbox>
        <Button colorScheme="blue" type="submit">
          Inserir
        </Button>
      </form>
    </div>
  );
};

export default TarefasInserir;
