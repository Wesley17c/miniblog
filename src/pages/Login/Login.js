import styles from './Login.module.css'
import { useAuthentication } from "../../useAuthentication";

import { useState, useEffect } from "react";

const Login = () => {


 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");

   const {login, error: authError, loading} = useAuthentication();


  // função que será ativada ao clicar em cadastrar, e suas validações de form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); 

    // o que será necessário para cadastro do usuário
    const user = {
     
      email,
      password,
    };



   const resposta = await login(user);

    console.log(resposta);
    
  };


  // substituindo o erro atual do set pelo autherro traduzido por meio do useffect
  useEffect(()=>{

    if(authError){
      setError(authError)
    }

  },[authError])


  return (
    <div className={styles.wrapper_container}>

    <h1>Entrar</h1>
    <h3> Faça o login para acessar o sistema</h3>

    <form className={styles.formulario} onSubmit={handleSubmit}>

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

     

      {!loading && <button className={styles.btn}> Entrar</button>}
      {loading && <button className={styles.btn} disabled> Aguarde</button>}

          {error && <p className={styles.error}>{error}</p>}
          
    </form>
  </div>
  )
}

export default Login;