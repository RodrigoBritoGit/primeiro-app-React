import { useParams } from "react-router-dom";
function Produto() {
    const { id } = useParams();

    return (
      <div>
        <h2>Página de detalhes do produto</h2>
        <p>Meu produto é: {id} </p>
      </div>
    );
  }
  
  export default Produto;