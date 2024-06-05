import { Button, Checkbox, Input } from "@chakra-ui/react";

const TarefasInserir = () => {
  return (
    <div>
      <h2 className="text-lg font-medium tracking-tight">
        Inserir nova tarefa
      </h2>
      <form className="flex justify-center gap-2 mt-2">
        <Input placeholder="Digite o título da task" />
        <Checkbox>Realizada?</Checkbox>
        <Button colorScheme="blue">Inserir</Button>
      </form>
    </div>
  );
};

export default TarefasInserir;
