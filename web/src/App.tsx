import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Auth/Login/index.";
import Register from "@pages/Auth/Register";
import { UserContext } from "@context/User/UserContext";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "@pages/Auth/queries";

const App: React.FC = () => {
  const userContext = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  if (loading) return <div>"Loading"</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            {data.getAuthUser ? <Home /> : <Login />}
          </Route>
          <Route exact path="/login">
            {data.getAuthUser ? <Home /> : <Login />}
          </Route>
          <Route exact path="/register">
            {data.getAuthUser ? <Home /> : <Register />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
