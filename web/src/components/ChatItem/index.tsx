import React from "react";
import "./styles.scss";
export default function ChatItem() {
  return (
    <a className="chat-item" href="#">
      <img
        className="square-icon"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profile"
      />
      <div className="chat-info-container">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          sapiente suscipit ipsum? Maxime odio aliquam doloribus, harum modi,
          ratione repellendus laudantium distinctio beatae veritatis quia
          impedit vitae magni quis placeat?
        </h1>
        <div className="chat-text-container">
          <div className="chat-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            doloremque officia. Tenetur, quam temporibus soluta distinctio
            labore, rem vel magnam, quae nihil incidunt voluptatum velit at
            itaque numquam sed deserunt?
          </div>
          <span>2d</span>
        </div>
      </div>
    </a>
  );
}
