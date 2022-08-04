import Styles from "./login.module.css";

const Login = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form} action=''>
        <label htmlFor=''>Username:</label>
        <input className={Styles.input} type='text' placeholder='Username' />
        <label htmlFor=''>Password</label>
        <input className={Styles.input} type='text' placeholder='Password' />
        <button>Login</button>
      </form>
      <p className={Styles.createAccount}>Create account?</p>
    </div>
  );
};

export default Login;
