import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

// NavLink için aktif sınıflarını yöneten fonksiyon
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  // Redux store'dan giriş durumunu çekiyoruz
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      {/* Home linki her zaman görünür */}
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>

      {/* Ödev Kriteri: Eğer kullanıcı giriş yapmışsa (true) Contacts linkini göster */}
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};