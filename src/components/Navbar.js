import { NavLink } from "react-router-dom";
import styles from "../components/NavBar.module.css";
import { useAuthentication } from "../useAuthentication";
import { useAuthValue } from "../Context/AuthContext";


const Navbar = () => {
  const { user } = useAuthValue();
  const {logout} = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to={"/"} className={styles.blog}>
        Mini <span>Blog</span>
      </NavLink>

      <ul className={styles.list}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink to={"/login"}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Cadastrar</NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink to={"/post/create"}> Novo post</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Perfil</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to={"/about"}>Sobre</NavLink>
        </li>

          {user && (
            <li >
              <NavLink onClick={logout}> Sair </NavLink>
            </li>
            )
          }

      </ul>
    </nav>
  );
};

export default Navbar;
