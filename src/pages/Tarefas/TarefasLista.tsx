import { Button, List, ListItem } from "@chakra-ui/react";

interface TarefasListaProps {
  tarefas: any;
}

const TarefasLista = ({ tarefas }: TarefasListaProps) => {
  return (
    <List className="w-full flex flex-col gap-2">
      {tarefas.map((tarefa: string) => {
        return (
          <ListItem className="flex justify-between items-center bg-blue-100 pl-4 pr-2 py-2 rounded-md">
            <h1>{tarefa}</h1>
            <div className="flex justify-center items-center gap-2">
              <Button colorScheme="red">Pendente</Button>
              <Button colorScheme="red">Excluir</Button>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TarefasLista;
