import Nome from "./components/Nome";

function App() {
  return (
    <div>
      <h1>Bem vindo ao meu projeto</h1>
      <br/>
      <Nome aluno="Rodrigo" idade={26}/>
      <Nome aluno="Dev" idade={30}/>

    </div>
  );
}

export default App;
