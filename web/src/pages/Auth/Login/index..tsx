import React from "react";

const Login = () => {
  const onLoginHandler = () => {
    console.log("login");
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
