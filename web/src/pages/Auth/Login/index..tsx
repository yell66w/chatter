import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "@context/User/UserProvider";

const Login = ({}) => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  let { from }: any = location.state || { from: { pathname: "/" } };
  const onLoginHandler = async () => {
    console.log("loggin you in...");
    auth.signin({ email: "ryan@gmail.com", password: "ryan123" }, () => {
      history.replace(from);
    });
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
