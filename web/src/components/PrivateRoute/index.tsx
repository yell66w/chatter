import React from "react";
import { useAuth } from "@context/User/UserProvider";
import { Redirect, Route } from "react-router-dom";
import Login from "@pages/Auth/Login/index.";

interface Props {
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ children, path }) => {
  const auth = useAuth();
  return (
    <Route
      exact
      path={path}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
export default PrivateRoute;
