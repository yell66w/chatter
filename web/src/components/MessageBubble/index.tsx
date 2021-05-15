import React from "react";
import "./styles.scss";
interface Props {
  data: {
    _id: string;
    name: string;
    content: string;
    image: string;
    createdAt: string;
  };
}
const MessageBubble = ({ data }: Props) => {
  return (
    <div className="message-bubble">
      <div className="image-container">
        <img className="square-icon-small" src={data.image} alt="profile" />
      </div>

      <div className="bubble-container">
        <h1>
          {data.name} <span className="bubble-date">{data.createdAt}</span>
        </h1>
        <div className="bubble-text-container">
          <div className="bubble-text">{data.content}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
