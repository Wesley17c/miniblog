import styles from "../Home/Home.module.css";

// HOOKS
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

  const [busca, setBusca] = useState("");
  const [posts] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper_container}>
      <h1 className={styles.h1}>Veja os nossos posts mais recentes</h1>

      <form onSubmit={handleSubmit} className={styles.formulario}> 

        <label className={styles.forms}>
          <input
            type="text"
            placeholder="pesquise por tags"
            onChange={(e) => setBusca(e.target.value)}
            value={busca}
          />
        </label>
        <>
        <button className={styles.btn2}> Pesquisar </button>
        </>
        
      </form>

      <div className={styles.wrapper_container}>
        
      <h2>posts</h2>

        {posts && posts.length === 0 && (
          <div className={styles.list}>
            <p>Não foram encontrados posts...</p>
            <Link to={'/post/create'}> Clique aqui para criar</Link>
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
