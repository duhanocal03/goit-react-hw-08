import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

// Form doğrulama şeması
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // Redux Thunk operasyonunu çağırıyoruz
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("Login successful");
      })
      .catch(() => {
        alert("Login failed. Please check your credentials.");
      });
    
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldGroup}>
          <label className={css.label}>Email</label>
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>

        <div className={css.fieldGroup}>
          <label className={css.label}>Password</label>
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};