import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useState } from "react";
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
    <div className="flex flex-col items-center justify-center mt-2">
      <h2 className="text-2xl font-bold text-orange-900">Sign in</h2>
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
          <Form className="bg-[#e8e4e4] border-none rounded-lg p-4 flex flex-col justify-start items-center text-center shadow-md gap-2 w-150 mx-auto my-5">
            <label className="text-[#552929] font-bold w-4/5">Email:</label>
            <Field
              name="email"
              type="email"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600 font-bold">{errors.email}</div>
            ) : null}
            <label className="text-[#552929] font-bold w-4/5">Password:</label>
            <Field
              name="password"
              type="password"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600 font-bold">{errors.password}</div>
            ) : null}

            <button
              type="submit"
              className="w-36 h-12 rounded-lg bg-[#724545] text-white font-bold cursor-pointer shadow-md"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;
