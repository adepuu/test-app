"use client";

import { register } from "@/utils/auth/login";
import { Formik, Form, Field } from "formik";

type RegisterFormValues = {
  email: string;
  password: string;
};

const initialValues: RegisterFormValues = {
  email: "",
  password: "",
};

const Register = () => {
  const handleSubmit = async (values: RegisterFormValues) => {
    const email = values.email;
    const password = values.password;

    const { data, error } = await register(email, password);
    console.log(data, error);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
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
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
