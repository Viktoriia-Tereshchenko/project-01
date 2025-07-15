import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import styles from "./Registration.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Name is required"),
  password: Yup.string()
    .min(8, "Password is too short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Password is too long!")
    .required("Password is required"),
  avatar: Yup.string()
    .min(2, "Avatar url is too short!")
    .max(240, "Avatar url is too long!")
    .required("Avatar url is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface Credentials {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const Registration = () => {
  const [message, setMessage] = useState("");
  async function fetchRegister(credentials: Credentials) {
    const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      setMessage("Successfully registered");
    }
  }

  return (
    <div>
      <h2>Sign up</h2>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          name: "",
          password: "",
          avatar: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          //console.log(values);
          fetchRegister(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <label>Name:</label>
            <Field name="name" className={styles.inp} />
            {errors.name && touched.name ? (
              <div className={styles.err}>{errors.name}</div>
            ) : null}
            <label>Password:</label>
            <Field name="password" type="password" className={styles.inp} />
            {errors.password && touched.password ? (
              <div className={styles.err}>{errors.password}</div>
            ) : null}
            <label>Email:</label>
            <Field name="email" type="email" className={styles.inp} />
            {errors.email && touched.email ? (
              <div className={styles.err}>{errors.email}</div>
            ) : null}
            <label>Avatar:</label>
            <Field name="avatar" className={styles.inp} />
            {errors.avatar && touched.avatar ? (
              <div className={styles.err}>{errors.avatar}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
