import MessageContent from "@components/MessageContent";
import MessageHeader from "@components/MessageHeader";
import MessageInputBar from "@components/MessageInputBar";
import { Switch, Route } from "react-router-dom";
import React from "react";
import "./styles.scss";
interface Props {
  id: string;
}
const MessageContainer = ({ id }: Props) => {
  return (
    <Route path="/m">
      <div className="message-container">
        <div className="message-wrapper">
          <div>{id}</div>
          <MessageHeader />
          <MessageContent />
          <MessageInputBar />
        </div>
      </div>
    </Route>
  );
};

export default MessageContainer;
