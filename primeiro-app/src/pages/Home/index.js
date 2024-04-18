import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina inicial</h1>

      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;
