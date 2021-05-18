import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Auth/Login/index.";
import Register from "@pages/Auth/Register";
import PrivateRoute from "@components/PrivateRoute";
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute isAuthRoute={true} path="/login">
            <Login />
          </PrivateRoute>
          <PrivateRoute isAuthRoute={true} path="/register">
            <Register />
          </PrivateRoute>
          <PrivateRoute isAuthRoute={false} path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
