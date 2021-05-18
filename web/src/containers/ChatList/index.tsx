import React from "react";
import ChatItem from "@components/ChatItem";
import Loading from "@components/Loading";
import "./styles.scss";
import { useQuery } from "@apollo/client";
import {
  ConversationType,
  GET_ALL_CONVERSATIONS,
} from "@utils/graphql/queries/conversations";
const ChatList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONVERSATIONS);
  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;
  console.log(data);
  return (
    <div className="chat-list">
      {data.conversations.map((item: ConversationType) => {
        return <ChatItem conversation={item} key={item.id} />;
      })}
    </div>
  );
};

export default ChatList;
