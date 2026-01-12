import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

export const AppBar = () => {
  // Redux store'dan kullanıcının giriş durumunu alıyoruz
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      {/* Ana navigasyon (Home ve giriş yapılmışsa Contacts) */}
      <Navigation />
      
      {/* Koşullu Render: 
        Giriş yapılmışsa UserMenu (Hoşgeldin mesajı ve LogOut butonu), 
        Giriş yapılmamışsa AuthNav (Login ve Register linkleri) gösterilir.
      */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};