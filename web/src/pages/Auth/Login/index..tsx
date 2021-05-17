import { useMutation } from "@apollo/client";
import { withUser } from "@context/UserProvider";
import React, { ConsumerProps, useContext } from "react";
import { LOGIN } from "./mutation";
import { UserContext } from "@context/UserContext";

const Login = ({}) => {
  const [login] = useMutation(LOGIN);
  const userContext = useContext(UserContext);
  const onLoginHandler = async () => {
    const res = await login({
      variables: { email: "george@gmail.com", password: "george123" },
    });
    const token = res.data.login.token;
    localStorage.setItem("token", token);
    userContext.login("10", "georigina", "sds@gmail.com", "11:57 AM");
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
