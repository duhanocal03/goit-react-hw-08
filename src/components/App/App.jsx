import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Sayfa yenilenirken beyaz ekran yerine kısa bir mesaj gösterir
  if (isRefreshing) {
    return <b>Refreshing user...</b>;
  }

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Ana sayfa */}
          <Route index element={<HomePage />} />
          
          {/* Kayıt Sayfası - Giriş yapmışsa rehbere atar */}
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
            }
          />
          
          {/* Giriş Sayfası - Giriş yapmışsa rehbere atar */}
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          
          {/* Rehber Sayfası - Giriş yapmamışsa login'e atar */}
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          
          {/* Tanımlanmayan yollar için ana sayfaya yönlendir (Opsiyonel) */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}