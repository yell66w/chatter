import React from "react";
import "./styles.scss";
import { IoCall, IoEllipsisVertical } from "react-icons/io5";
import SearchBar from "@components/SearchBar";
export default function MessageHeader() {
  return (
    <div className="message-header">
      <div className="message-header-left">
        <img
          className="square-icon"
          src="https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
          alt=""
        />
        <div className="message-header-details-container">
          <h1>@ryantillaman</h1>
          <div className="status">
            <span className="online-circle"></span>
            <p>Online</p>
          </div>
        </div>
      </div>
      <div className="message-header-right">
        <IoCall className="header-icon" size={25} />
        <IoEllipsisVertical className="header-icon" size={25} />
      </div>
    </div>
  );
}
