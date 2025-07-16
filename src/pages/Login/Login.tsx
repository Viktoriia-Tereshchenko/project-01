import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/constants/routes";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Password is too long!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface Credentials {
  email: string;
  password: string;
}

const Login = () => {
  const [message, setMessage] = useState("");
  const { setIsAuthorized } = useCurrentUser();
  const navigate = useNavigate();

  async function fetchLogin(credentials: Credentials) {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      setMessage("Successfully sign in");

      // получение ТОКИНОВ
      const { access_token } = await res.json();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("isAuthorized", "true");
      setIsAuthorized(true);
      //navigate(-1); // на предыдущую
      navigate(ROUTES.ACCOUNT); // на предыдущую
    }
  }

  return (
    <div>
      <h2>Sign in</h2>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          fetchLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <label>Email:</label>
            <Field name="email" type="email" className={styles.inp} />
            {errors.email && touched.email ? (
              <div className={styles.err}>{errors.email}</div>
            ) : null}
            <label>Password:</label>
            <Field name="password" type="password" className={styles.inp} />
            {errors.password && touched.password ? (
              <div className={styles.err}>{errors.password}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
