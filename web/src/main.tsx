import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/main.scss";
import App from "./App";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "@graphql-util/apolloClient";
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
