import Input from "../../Input/Input";
import Separator from "../../Separator/Separator";

function Contato() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <form className="w-[250px] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium tracking-tight">
            Entre em contato
          </h1>

          <Separator />

          <div className="flex flex-col gap-2 mt-2">
            <Input type="text" placeholder="Nome" autoFocus />
            <Input type="email" placeholder="E-mail" />
            <Input type="tel" placeholder="Telefone" />
          </div>

          <Separator />

          <button
            type="button"
            className="w-full rounded-md mt-2 bg-red-500 text-white font-medium text-lg p-3"
          >
            Fatec: Enviar mensagem
          </button>
        </form>
      </div>
    </>
  );
}

export default Contato;
