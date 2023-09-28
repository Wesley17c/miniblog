import styles from "./Search.module.css";
//hooks
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useQuery } from "../../Hooks/useQuery";
import PostDetails from "../../components/PostDetails";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();

  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("post", search);

  
  return (
    
    <div className={styles.container_busca} >
      <h1>Busca por tags</h1>

      <div>

        {posts && posts.length === 0 && (
          <div className={styles.list}>
            
            <>
                <p className={styles.back}>Não foram encontrados posts a partir da sua busca</p>
                <Link to={"/"} className={styles.back_home}> Voltar</Link>
            </>

          </div>
        )}

        {posts &&
          posts.map((post) => <PostDetails key={post.id} post={post} />)}
          
      </div>
      
    </div>

    
  );

  
};

export default Search;
