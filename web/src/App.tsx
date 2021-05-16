import React from "react";
import MessageContainer from "@containers/MessageContainer";
import Sidebar from "@containers/Sidebar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Switch>
          <MessageContainer id="1002" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
