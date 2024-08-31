import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { SubmitBtn, FormInput } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const loginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const resp = await customFetch.post("/auth/local", data);
      toast.success(`Welcome ${resp.data.user.username}`);
      store.dispatch(loginUser(resp.data));
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "someThing went wrong";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  //demo user
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuest = async () => {
    const guestData = {
      identifier: "test@test.com",
      password: "secret",
    };
    try {
      const resp = await customFetch.post("/auth/local", guestData);
      dispatch(loginUser(resp.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error.please try later.");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card flex flex-col gap-y-4 w-96 p-8 bg-base-100 shadow-lg "
      >
        <h4 className="text-3xl text-center font-bold">Login</h4>
        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block" onClick={loginAsGuest}>
          Guest
        </button>
        <p>
          not a member yet?{" "}
          <Link
            to="/register"
            className="l-2 link link-hover link-primary capitalize "
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
