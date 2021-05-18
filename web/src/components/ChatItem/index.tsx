import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { ConversationType } from "@utils/graphql/queries/conversations";
import { useAuth } from "@context/User/UserProvider";
interface Props {
  conversation: ConversationType;
}
export default function ChatItem({ conversation }: Props) {
  const auth = useAuth();
  const conversationName = conversation.participants.find(
    (item) => item.id !== auth.user?.id
  )?.name;

  return (
    <Link to={`/m/${conversation.id}`} className="chat-item">
      <img
        className="square-icon"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profile"
      />
      <div className="chat-info-container">
        <h1>{conversation.title || conversationName} </h1>
        <div className="chat-text-container">
          <div className="chat-text">Sample</div>
          <span>2d</span>
        </div>
      </div>
    </Link>
  );
}
