import React from "react";
import "./styles.scss";
export default function ChatItem() {
  return (
    <li>
      <a className="chat-item " href="#">
        <img
          className="square-icon"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile"
        />
      </a>
    </li>
  );
}
