import React from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./mutation";

const Login = ({}) => {
  const [login] = useMutation(LOGIN);
  const onLoginHandler = async () => {
    const res = await login({
      variables: { email: "george@gmail.com", password: "george123" },
    });
    const token = res.data.login.token;
    localStorage.setItem("token", token);
  };
  return (
    <div>
      <input placeholder="email" type="text" />
      <input placeholder="password" type="password" />
      <button onClick={onLoginHandler} type="submit">
        Login
      </button>
    </div>
  );
};

export default Login;
