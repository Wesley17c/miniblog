import styles from "./Register.module.css";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar!</h1>
      <p>cadastre-se para compartilhar suas histórias!</p>
      <form>
        <span>Nome:</span>
        <input
          type="text"
          name="displayName"
          required
          placeholder="digite o seu nome"
        />
      </form>

      <form>
        <span>E-mail:</span>
        <input
          type="email"
          name="email"
          required
          placeholder="digite o seu e-mail"
        />
      </form>

      <form>
        <span>Senha:</span>
        <input
          type="password"
          name="password"
          required
          placeholder="digite sua senha"
        />
      </form>

      <form>
        <span>Confirme sua senha:</span>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="confirme sua senha"
        />
      </form>
      <button> Cadastrar</button>

    </div>
  );
};

export default Register;
