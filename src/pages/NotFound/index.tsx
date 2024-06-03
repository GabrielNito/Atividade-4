import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>A página que você está tentando acessar não foi encontrada</p>
      <Link to="/" className="text-blue-700 underline">
        Página inicial
      </Link>
    </div>
  );
};

export default NotFound;
