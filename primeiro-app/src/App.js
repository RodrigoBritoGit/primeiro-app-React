import { useState, useEffect } from "react";
import './style.css';

// API URL
// https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
const [nutri,setNutri] = useState([]);

useEffect(() => {
  function loadingAPI(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

    fetch(url)
    .then((resultado) => resultado.json())
    .then((json=> {
      setNutri(json)
    }))
  }
  loadingAPI()
})
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Acessar</a>
          </article>
        )
      } )}
    </div>
  );
}

export default App;
