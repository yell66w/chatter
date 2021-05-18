import React from "react";
import { useAuth } from "@context/User/UserProvider";
import { Redirect, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "@utils/graphql/queries/currentUser";

interface Props {
  path: string;
  isAuthRoute: boolean;
}

const PrivateRoute: React.FC<Props> = ({ children, path, isAuthRoute }) => {
  const auth = useAuth();

  if (!isAuthRoute)
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
  else {
    return (
      <Route
        exact
        path={path}
        render={({ location }) =>
          !auth.user ? (
            children
          ) : (
            <Redirect to={{ pathname: "/", state: { from: location } }} />
          )
        }
      />
    );
  }
};
export default PrivateRoute;
