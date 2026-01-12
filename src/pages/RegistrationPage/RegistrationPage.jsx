import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Create Your Account</h1>
      <p className={css.subtitle}>
        Join us today to keep your contacts organized and safe.
      </p>
      
      {/* Kayıt formu bileşeni */}
      <RegistrationForm />
      
      <p className={css.footerText}>
        Already have an account? <a href="/login" className={css.link}>Log In</a>
      </p>
    </div>
  );
};

export default RegistrationPage;