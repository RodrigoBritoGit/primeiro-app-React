import {useState} from 'react'
import Nome from "./components/Nome";

function App() {
  //aluno = nome da propriedade que vou alterar / setAluno nome da função que vou utilizar
  const [aluno,setAluno] = useState('Rodrigo Dev')

  function handleChangeName (parametro){
    setAluno(parametro)
  }

  // h2 chamando o valor passado no useState pelo nome aluno
  return (
    <div>
      <h1>Bem vindo ao meu projeto</h1>
      <br/>
      <h2>Olá {aluno}</h2>
      <button onClick={() => handleChangeName('Teste passando parametro com função anônima')}>
        Mudar nome
      </button>
      <br/>
      <Nome aluno="Rodrigo" idade={26} />
    </div>
  );
}

export default App;
