import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Contact Book Manager{" "}
        <span role="img" aria-label="Greeting icon">
          📖
        </span>
      </h1>
      
      <p className={css.description}>
        Keep your contacts organized, secure, and accessible from anywhere. 
        Create your personal account to start managing your communication list.
      </p>

      {isLoggedIn ? (
        <div className={css.welcomeBox}>
          <h2 className={css.welcomeText}>Welcome back, {user.name}!</h2>
          <Link to="/contacts" className={css.ctaBtn}>
            Go to My Contacts
          </Link>
        </div>
      ) : (
        <div className={css.authBox}>
          <p className={css.infoText}>Ready to get started?</p>
          <div className={css.btnGroup}>
            <Link to="/register" className={css.ctaBtn}>
              Join Now
            </Link>
            <Link to="/login" className={css.secondaryBtn}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;