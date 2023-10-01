// import styles from './Dashboard.module.css';

import { Link } from "react-router-dom";

//HOOKS
import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario

  const { documents: posts, loading } = useFetchDocuments("post", null, uid);

  const deleteDocument = (id)=> {
  

  }

  return (
    <div>
      {loading && <p>Carregando posts</p>}

      <h2>Dashboard</h2>
      <h3> Gerencie seus posts</h3>
      {posts && posts.length === 0 ? (
        <div>
          <p> Não foram encontrados posts</p>
          <Link to={"/post/create"}> Criar primeiro post </Link>
        </div>
      ) : (
        <>

              <div>
                <span>Título</span>
                <span>Acões</span>
              </div>

          
            {posts && posts.map((post) => (
              <div key={post.id}>
                <h3 > {post.title} </h3>
                <Link to={`/post/${post.id}`}>Ver</Link>
                <Link to={`/post/edit/${post.id}`}>Editar</Link>
                <button onClick={()=> deleteDocument(post.id)} >Excluir</button>
              </div>
            ))}
          
        </>
      )}
    </div>
  );
};

export default Dashboard;
