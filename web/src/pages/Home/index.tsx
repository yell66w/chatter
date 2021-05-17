import MessageContainer from "@containers/MessageContainer";
import Sidebar from "@containers/Sidebar";
import React from "react";

const Home = () => {
  return (
    <>
      <Sidebar />
      <MessageContainer id="1004" />
    </>
  );
};

export default Home;
