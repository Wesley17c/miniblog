import styles from './Post.module.css';
// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from '../../Hooks/useFetchDocument';

const Post = () => {

    const {id} = useParams();
    const {document: post, loading} = useFetchDocument('post', id)


  return (
    <div className={styles.container} >


    {loading && <p>carregando post...</p>}

     {post && (
      <>
      
          <h1>{post.title} </h1>
          <img src={post.image}   />
          <p> {post.title} </p>
          <p> {post.body} </p>
          <h3> este post tratasse de</h3>
          <p> {post.tagArray.map((tag)=> (
            <p key={tag}> <span>#</span>  {tag} </p>
          )) } </p>
      </>
     )}
    </div>
  )
}

export default Post;
