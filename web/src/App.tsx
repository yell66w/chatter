import React from "react";
import MessageContainer from "@containers/MessageContainer";
import Sidebar from "@containers/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Auth/Login/index.";
import Register from "@pages/Auth/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
