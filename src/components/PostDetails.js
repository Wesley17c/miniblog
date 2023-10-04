import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";

const PostDetails = ({ post }) => {
  return (
    <div className={styles.container_post}>

      <div>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        
      </div>

      <div className={styles.container_tags}>
        <p> Postagem criada por: {post.createBy} </p>
        <p>tags:</p>
        {Array.isArray(post.tagArray) &&
          post.tagArray.map((tag) => (
            <p key={tag}> 
              <span>#</span> {tag}
            </p>
          ))}
      </div>

      <Link className={styles.ler} to={`/post/${post.id}`}>
        
        ler
      </Link>
    </div>
  );
};

export default PostDetails;
