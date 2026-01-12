import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

// Form doğrulama şeması (Yup)
const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // Redux Thunk operasyonunu tetikliyoruz
    dispatch(register(values))
      .unwrap()
      .then(() => {
        console.log("Registration successful!");
      })
      .catch((error) => {
        alert("Registration failed: " + error);
      });
    
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.fieldGroup}>
          <label className={css.label}>Username</label>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

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
          Register
        </button>
      </Form>
    </Formik>
  );
};