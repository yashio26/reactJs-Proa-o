import "./NavBar.css"
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (        
<nav className="Navigation">
      <ul>
          <li>
              <a href="../public/index.html">Personajes</a>
          </li>
          <li>
              <a href="../public/index.html">Skins</a>
          </li>
          <li>
              <a href="../public/index.html">Celulas auricas</a>
          </li>
          <li><CardWidget /></li>
      </ul>
</nav>);
};

export default NavBar;
