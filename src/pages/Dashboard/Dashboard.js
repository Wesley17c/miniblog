import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//HOOKS
import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocuments } from "../../Hooks/useFetchDocuments";
import { useDeleteDocument } from "../../Hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario

  const { documents: posts, loading } = useFetchDocuments("post", null, uid);

  const { deleteDocument } = useDeleteDocument("post");

  return (
    <div className={styles.wrapper_container}>
      {loading && <p>Carregando posts</p>}

      <div className={styles.acoes}>
        <h3>Perfil de usuário</h3>

        <h3> Gerencie seus posts</h3>
      </div>

      {posts && posts.length === 0 ? (
        <div>
          <p> Não foram encontrados posts</p>
          <Link className={styles.btn} to={"/post/create"}>
            {" "}
            Criar primeiro post{" "}
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.acoes}>
            <span>Título</span>
            <span>Ações</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div className={styles.acoes_2} key={post.id}>
                <h3> {post.title} </h3>
                <div className={styles.acoes_btn}>
                  <Link className={styles.btn} to={`/post/${post.id}`}>Ver</Link>
                  <Link className={styles.btn} to={`/post/edit/${post.id}`}>Editar</Link>
                  <button className={styles.btn_excluir} onClick={() => deleteDocument(post.id)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
