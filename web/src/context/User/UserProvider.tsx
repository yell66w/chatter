import React, { useContext, useState } from "react";
import { UserContext } from "@context/User/UserContext";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN } from "@utils/graphql/mutations/login";
import { useEffect } from "react";
import { GET_CURRENT_USER } from "@utils/graphql/queries/currentUser";

export type UserType = {
  name: string;
  email: string;
  createdAt: string;
  id: string;
};

export const UserProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
function useProvideAuth() {
  const [user, setUser] = useState<UserType | null>(null);
  const [login] = useMutation(LOGIN);
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  useEffect(() => {
    if (data) {
      const userInfo = data.getAuthUser;
      setUser({
        name: userInfo.name,
        createdAt: userInfo.createdAt,
        email: userInfo.email,
        id: userInfo.id,
      });
    }
  }, [data]);

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
      name: "Ryan",
      createdAt: "11:58 AM",
      email: "ryan@gmail.com",
      id: "1002",
    }); //edit
    console.log("logged you in..");
    callback();
  };

  const signout = (cb: any) => {
    setUser(null);
  };

  return {
    user,
    setUser,
    signin,
    signout,
  };
}

export function useAuth() {
  return useContext(UserContext);
}
