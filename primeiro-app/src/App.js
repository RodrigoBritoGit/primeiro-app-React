import { useState } from "react";

function App() {
  //useState nome,email,idade
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  //useState que armazena todas propriedades nome,email,idade, sendo declarado como um objeto vazio
  // Dentro dos parenteses é passado o valor por default fixo ao criar useState({});
  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();
    // aqui é passado o valor de user
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  // Formulario com evento onSubmit chamando a função handleRegister
  // Essa propriedade pega o valor do input e atribuit a setNome onChange={(e) => setNome(e.target.value)
  // Assim está sendo acessado a propriedade nome do objeto user definido acima <span>Bem vindo: {user.nome} </span> <br/><br/>
  return (
    <div>
      <h1>Cadastro de usuários</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label>
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />{" "}
        <br />
        <br />
        <label>Email:</label>
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <br />
        <label>Idade:</label>
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <div>
        <span>Bem vindo: {user.nome} </span> <br />
        <br />
        <span>Idade: {user.idade} </span> <br />
        <br />
        <span>Email: {user.email} </span> <br />
        <br />
      </div>
    </div>
  );
}

export default App;
