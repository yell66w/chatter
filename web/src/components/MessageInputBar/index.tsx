import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { IoMdImage } from "react-icons/io";
import { HiEmojiHappy } from "react-icons/hi";
import "./styles.scss";
import TextareaAutosize from "react-textarea-autosize";
export default function MessageInputBar() {
  return (
    <div className="message-input-container">
      <div className="message-actions message-actions-left">
        <IoAddCircle size={24} />
        <IoMdImage size={24} />
      </div>
      <div className="message-composer">
        <TextareaAutosize
          className="textareaAutosize"
          maxRows={6}
          placeholder="Message @ryantillaman"
        />
      </div>
      <div className="message-actions message-actions-right">
        <HiEmojiHappy size={24} />
      </div>
    </div>
  );
}
