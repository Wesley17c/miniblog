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
      </>
     )}
    </div>
  )
}

export default Post;
