import styles from "../Home/Home.module.css";

// HOOKS
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchDocuments } from "../../../Hooks/useFetchDocuments";
//COMPONENTS
import PostDetails from "../../../components/PostDetails";

const Home = () => {
  const [busca, setBusca] = useState("");
  const { documents: posts, loading } = useFetchDocuments("post");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Adiciona a classe 'scaled' após um pequeno atraso para ativar a transição
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    
    // Limpa o timer para evitar efeitos colaterais se o componente for desmontado antes do timer expirar
    return () => clearTimeout(timer);
  }, []); // Executa apenas uma vez após a montagem inicial

  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    

    if(busca){
      return navigate(`/search?q=${busca}`)
    }

  };
  
  
  return (
    <div className={styles.wrapper_container}>

      {/* se a animação for verdadeira, adicione a classe scaled */}
      <div className={`${styles.texto} ${animate ? styles.scaled : ""}`}>
        <h2>Seja bem vindo!</h2>
      </div>


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

        {loading && <p>carregando...</p>}

        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}

        {posts && posts.length === 0 && (

          <div className={styles.list}>
                  <p>Não foram encontrados posts...</p>
                  <Link to={"/post/create"}> Clique para criar</Link>
          </div>
        )}

      </div>


    </div>
  );
};

export default Home;
