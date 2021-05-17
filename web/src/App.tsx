import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Auth/Login/index.";
import Register from "@pages/Auth/Register";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
