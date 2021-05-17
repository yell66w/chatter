import MessageContent from "@components/MessageContent";
import MessageHeader from "@components/MessageHeader";
import MessageInputBar from "@components/MessageInputBar";
import React from "react";
import "./styles.scss";
interface Props {
  id: string;
}
const MessageContainer = ({ id }: Props) => {
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
