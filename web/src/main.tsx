import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import App from "./App";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@graphql-util/apolloClient";
import { UserProvider } from "@context/User/UserProvider";
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <App />
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
