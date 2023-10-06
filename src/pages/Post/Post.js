import styles from "./Post.module.css";
// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../Hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("post", id);

  return (
    <div className={styles.container}>
      {loading && <p>carregando post...</p>}

      {post && (
        <>
          <h1>{post.title} </h1>
          <img src={post.image} alt="imagem" />
          <h2> {post.title} </h2>
          <p> {post.body} </p>
          <h3> este post tratasse de:</h3>
          <div className={styles.tags}>
            {Array.isArray(post.tagArray) &&
              post.tagArray.map((tag) => (
                <p key={tag}>
                  {" "}
                  <span>#</span> {tag}{" "}
                </p>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
