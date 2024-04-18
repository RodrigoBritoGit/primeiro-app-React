import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <h2>Dev</h2>
        </div>

        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
