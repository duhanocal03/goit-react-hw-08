import { LoginForm } from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Log In to Your Account</h1>
      <p className={css.subtitle}>
        Please enter your credentials to access your contacts.
      </p>
      
      {/* Ödev Kriteri: LoginForm bileşeni burada render edilir */}
      <LoginForm />
      
      <p className={css.footerText}>
        Don't have an account? <a href="/register" className={css.link}>Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;