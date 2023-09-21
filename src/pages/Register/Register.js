
import { useAuthentication } from "../../Hooks/useAuthentication";

import styles from "./Register.module.css";
import { useState, useEffect } from "react";



const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

   const {createUser, error: authError, loading} = useAuthentication();


  // função que será ativada ao clicar em cadastrar, e suas validações de form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); 

    // o que será necessário para cadastro do usuário
    const user = {
      displayName,
      email,
      password,
    };


    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

   const resposta = await createUser(user);

    console.log(resposta);
    
  };



  return (

    <div className={styles.wrapper_container}>

      <h1>Cadastre-se para postar</h1>
      <h3> Crie seu usuário e compartilhe e suas histórias</h3>

      <form className={styles.formulario} onSubmit={handleSubmit}>

        <label className={styles.forms}>
          <span> Nome</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="digite o seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

        <label className={styles.forms}>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            required
            placeholder="digite o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className={styles.forms}>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label className={styles.forms}>
          <span>Confirme sua senha</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <button className={styles.btn}> Cadastrar</button>

            {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
