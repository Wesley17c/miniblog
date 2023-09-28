import styles from'./PostDetails.module.css';
import { Link } from 'react-router-dom';



const PostDetails = ({post}) => {
  return (
    <div className={styles.container_post}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p> {post.createBy} </p>

        <div>

            {post.tagArray.map((tag)=> (
                <p className={styles.tag} key={tag}> <span>#</span> {tag} </p>

            ))}

        </div>

        <Link className={styles.ler} to={`/post/${post.id}`} > ler</Link>


    </div>
    
  )
}

export default PostDetails;
