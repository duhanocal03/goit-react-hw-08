import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

// NavLink için aktif sınıfını belirleyen yardımcı fonksiyon
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AuthNav = () => {
  return (
    <div className={css.container}>
      {/* Kayıt Sayfası Linki */}
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      
      {/* Giriş Sayfası Linki */}
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};