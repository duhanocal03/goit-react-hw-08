import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

/**
 * RestrictedRoute: 
 * Giriş yapmış kullanıcıların Login/Register gibi halka açık sayfalara 
 * erişimini kısıtlar ve onları belirlenen sayfaya yönlendirir.
 */
export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};