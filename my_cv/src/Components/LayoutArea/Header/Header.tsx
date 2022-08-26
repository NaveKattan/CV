import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {

  return (
    <header className="Header">
      <NavLink to="/"><p className="HeaderP">Home</p></NavLink>
      <NavLink to="/about"><p className="HeaderP">About</p></NavLink>
      <NavLink to="/education"><p className="HeaderP">Education</p></NavLink>
      <NavLink to="/skills"><p className="HeaderP">Skills</p></NavLink>
      <NavLink to="/hobbies"><p className="HeaderP">Hobbies</p></NavLink>
      <NavLink to="/contact"><p className="HeaderP">Contact</p></NavLink>
    </header>
  );
}

export default Header;