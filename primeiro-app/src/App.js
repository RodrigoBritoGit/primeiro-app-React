import { useState,useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  // Se deixar o array vazio toda vez que recarregar a pagina essa função será executada
  // se passar um parametro dentro do Array [] toda vez que sofrer uma alteração a função é executada
  useEffect(() =>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])


  // e.preventDefault(); Serve para o navegador não ficar atualizando infinitamente
  // setTarefas([...tarefas,input]); os 3 pontos está incrementando o valor do Array tarefas + input digitado
  // setInput(''); está limpando campo input
  function handleRegister(e) {
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput("");
  }

  // <li key={tarefa}>{tarefa}</li>  - Todas listas em React precisa ter uma variavel key
  return (
    <div>
      <h1>Cadastro de usuários</h1>
      <form onSubmit={handleRegister}>
        <label>Tarefa:</label>
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <div>
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
