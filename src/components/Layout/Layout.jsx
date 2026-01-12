import { Outlet } from "react-router-dom"; // Outlet ekledik
import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        {/* App.jsx içindeki alt rotalar (HomePage, ContactsPage) burada render edilir */}
        <Outlet /> 
      </main>
    </div>
  );
};