import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";

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
    <div className="flex flex-col items-center justify-center mt-2">
      <h2 className="text-2xl font-bold text-orange-900">Sign up</h2>
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
          <Form className="bg-[#e8e4e4] border-none rounded-lg p-4 flex flex-col justify-start items-center text-center shadow-md gap-2 w-150 mx-auto my-5">
            <label className="text-[#552929] font-bold w-4/5">Name:</label>
            <Field
              name="name"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.name && touched.name ? (
              <div className="text-red-600 font-bold">{errors.name}</div>
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
            <label className="text-[#552929] font-bold w-4/5">Email:</label>
            <Field
              name="email"
              type="email"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600 font-bold">{errors.email}</div>
            ) : null}
            <label className="text-[#552929] font-bold w-4/5">Avatar:</label>
            <Field
              name="avatar"
              className="w-full rounded border-none h-6 my-1 mx-auto text-center bg-white"
            />
            {errors.avatar && touched.avatar ? (
              <div className="text-red-600 font-bold">{errors.avatar}</div>
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

export default Registration;
