import styles from "./CreatePost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.prevenyDefault();
  };

  return (
    <div>
      <h2>Crie seu post</h2>
      <p>Escreva sobre o que quiser e compartilhe os seus conhecimentos.</p>

      <form onClick={handleSubmit}>
        <label>
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

        <label>
          <span>IURL da imagem</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Adicione uma imagem que representre o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteúdo</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label>
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

        <button className={styles.btn}> Cadastrar</button>

      </form>


    </div>
  );
};

export default CreatePost;
