import React from "react";
import MessageContainer from "@containers/MessageContainer";
import Sidebar from "@containers/Sidebar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default App;
