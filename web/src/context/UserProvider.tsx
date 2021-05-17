import React, { useState } from "react";
import { UserContext } from "@context/UserContext";
export const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    id: "",
    createdAt: "",
  });
  const login = (
    id: string,
    displayName: string,
    email: string,
    createdAt: string
  ) => {
    setCurrentUser({ id, createdAt, displayName, email });
  };

  return (
    <UserContext.Provider value={{ currentUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export const withUser = (Child: any) => (props: any) =>
  (
    <UserContext.Consumer>
      {(context) => <Child {...props} context={context} />}
    </UserContext.Consumer>
  );
