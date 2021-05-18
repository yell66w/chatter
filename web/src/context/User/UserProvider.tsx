import React, { useContext, useState } from "react";
import { UserContext } from "@context/User/UserContext";
import { useMutation } from "@apollo/client";
import { LOGIN } from "@pages/Auth/Login/mutation";
export const UserProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
function useProvideAuth() {
  const [user, setUser] =
    useState<{
      displayName: string;
      email: string;
      createdAt: string;
      id: string;
    } | null>(null);
  const [login] = useMutation(LOGIN);

  const signin = async (
    variables: { email: string; password: string },
    callback: () => void
  ) => {
    console.log("almost done");
    const res = await login({
      variables,
    });
    const token = res.data.login.token;
    console.log("your token is ", token);
    localStorage.setItem("token", token);
    setUser({
      displayName: "Ryan",
      createdAt: "11:58 AM",
      email: "ryan@gmail.com",
      id: "1002",
    });
    console.log("logged you in..");
    callback();
  };

  const signout = (cb: any) => {
    setUser(null);
  };

  console.log("details", user);
  return {
    user,
    signin,
    signout,
  };
}

export function useAuth() {
  return useContext(UserContext);
}
