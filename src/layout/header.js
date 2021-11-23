import logo from './Salween-logo.svg';
import { NavLink } from "react-router-dom";
// styles
import "./header.css";

const Header = () => {
  const activeStyle = {
    color: "#fff",
  };

  return (
    <header class='header'>
      <div class='container'>
        <NavLink to="/">
            <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <nav class='navigation'>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/guide"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to="games"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Play
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;