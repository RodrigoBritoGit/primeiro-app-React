import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div>
        <h1>Bem vindo a pagina inicial</h1>
      </div>

      <div>
        <Link to="/produto/123">Acessar produto 123</Link>
      </div>
    </>
  );
}

export default Home;
