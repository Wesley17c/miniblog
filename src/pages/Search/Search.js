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
    
    <div>
      <h1>Buscando tags</h1>

      <div>

        {posts && posts.length === 0 && (
          <div className={styles.list}>
            
            <>
                <p>Não foram encontrados posts a partir da sua busca</p>
                <Link to={"/"}> Voltar</Link>
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
