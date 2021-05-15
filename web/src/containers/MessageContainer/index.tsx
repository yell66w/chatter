import MessageContent from "@components/MessageContent";
import MessageHeader from "@components/MessageHeader";
import MessageInputBar from "@components/MessageInputBar";
import React from "react";
import "./styles.scss";
const MessageContainer: React.FC = () => {
  return (
    <div className="message-container">
      <div className="message-wrapper">
        <MessageHeader />
        <MessageContent />
        <MessageInputBar />
      </div>
    </div>
  );
};

export default MessageContainer;
