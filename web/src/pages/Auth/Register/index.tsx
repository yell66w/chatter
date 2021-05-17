import React from "react";

const Register = () => {
  return (
    <div>
      <input placeholder="name" type="text" />
      <input placeholder="email" type="text" />
      <input placeholder="password" type="password" />
      <input placeholder="confirm password" type="password" />
      <button type="submit">Register</button>
    </div>
  );
};

export default Register;
