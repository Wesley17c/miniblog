import styles from "./EditPost.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../Context/AuthContext";
import { useUpdateDocument } from "../../Hooks/useUpdateDocument";
import { useFetchDocument } from "../../Hooks/useFetchDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("post", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const tagArray = tags.split(", ").map(tag => tag.trim());

      setTags(tagArray);
    }
  }, [post, tags]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("post");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    //validação de imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser em URL");
    }

    //criar array de tags

    const tagArray = tags;

    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos");
    }

    //checar todos os valores

    if (formError) return;


    const data = {
        title,
        image,
        tagArray,
        body,
        uid: user.uid,
        createBy: user.displayName,
    }

    updateDocument(id, data);

    //redirecionamento de páginas
    navigate("/dashboard");
  };

  return (
    <div className={styles.wrapper_container}>
      {post && (
        <>
          <h2>Editando post: {post.title} </h2>
          <p>Altere os dados do post como desejar.</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label className={styles.forms}>
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

            <p> Preview da imagem atual: </p>
            <img src={post.image} alt={post.title} />


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

            {!response.loading && (
              <button className={styles.btn}> Editar</button>
            )}
            {response.loading && (
              <button className={styles.btn} disabled>
                {" "}
                Aguarde
              </button>
            )}

            {response.error && <p className={styles.error}>{response.error}</p>}
            {formError && <p className={styles.error}>{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
