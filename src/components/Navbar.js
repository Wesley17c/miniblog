import { NavLink } from "react-router-dom";
import styles from "../components/NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <NavLink to={"/"} className={styles.blog}>
        Mini <span>Blog</span>
      </NavLink>

      <ul className={styles.list}>
        <li>
             <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
             <NavLink to={"/login"} >Entrar</NavLink>
        </li>
        <li>
             <NavLink to={"/register"} >Cadastrar</NavLink>
        </li>
        <li>
             <NavLink to={"/about"} >Sobre</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
