import React, { ChangeEvent, KeyboardEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoAddCircle, IoImage } from "react-icons/io5";
import { IoMdImage } from "react-icons/io";
import "./styles.scss";
import TextareaAutosize from "react-textarea-autosize";
export default function MessageInputBar() {
  return (
    <div className="message-input-container">
      <div className="message-input-box">
        <div className="message-tabs">
          <IoAddCircle size={25} />
          <IoMdImage size={23} />
        </div>
        <div className="message-textarea">
          <TextareaAutosize
            placeholder="Message @ryantillaman"
            className="message-input"
            maxRows={6}
          />
          {/* <textarea
            placeholder="Message @ryantillaman"
            className="message-input"
          /> */}
        </div>
      </div>
    </div>
  );
}
