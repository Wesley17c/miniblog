import styles from "./CreatePost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";
import { useInsertDocument } from "../../Hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");

  const {user} = useAuthValue();

  const {insertDocument, response} = useInsertDocument('post');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('')

    //validação de imagem


    //criar array de tags
  


    //checar todos os valores

    insertDocument({
      title,
      image,
      tags,
      body,
      uid: user.uid,
      createBy: user.displayName
    })


    //redirecionamento de páginas

  };

  return (
    <div className={styles.wrapper_container}>
      <h2>Crie seu post</h2>
      <p>Escreva sobre o que quiser e compartilhe os seus conhecimentos.</p>

      <form onClick={handleSubmit} className={styles.formulario}>
        <label className={styles.forms} >
          <span>Título do post</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label className={styles.forms}>
          <span>URL da imagem</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Adicione uma imagem que representre o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label className={styles.forms}>
          <span>Conteúdo</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label className={styles.forms}>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira suas tags separadas por vírgulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>

        
        {!response.loading && <button className={styles.btn}> Cadastrar</button>}
        {response.loading && <button className={styles.btn} disabled> Aguarde</button>}

            {response.error && <p className={styles.error}>{response.error}</p>}

      </form>


    </div>
  );
};

export default CreatePost;
