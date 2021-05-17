import React, { useState } from "react";
import { UserContext } from "@context/User/UserContext";
export const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    email: "",
    id: "",
    createdAt: "",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
