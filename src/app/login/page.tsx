"use client";

import { login, loginWithGoogle } from "@/utils/auth/login";
import { Formik, Form, Field } from "formik";
import Link from "next/link";

type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = async (values: LoginFormValues) => {
    const email = values.email;
    const password = values.password;

    console.log(email, password);
    const { data, error } = await login(email, password);
    console.log(data, error);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-light focus:outline-none focus:shadow-outline"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </Form>
        </Formik>
        <span className="text-gray-500 text-center w-full">or</span>
        <button
          onClick={loginWithGoogle}
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login with Google
        </button>
        <span className="text-gray-300 text-center w-full">Don&apos;t have an account? <Link className="text-blue-500 underline" href="/register">Register</Link></span>
      </div>
    </div>
  );
};

export default Login;
