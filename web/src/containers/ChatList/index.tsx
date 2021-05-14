import React from "react";
import ChatItem from "@components/ChatItem";
import "./styles.scss";
const ChatList: React.FC = () => {
  return (
    <ul className="chat-list">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </ul>
  );
};

export default ChatList;
