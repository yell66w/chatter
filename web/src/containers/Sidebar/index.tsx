import React from "react";
import "./styles.scss";
import SideHeader from "@components/SideHeader";
import ChatList from "@containers/ChatList";
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <SideHeader />
      <ChatList />
    </div>
  );
};

export default Sidebar;
