import React from "react";
import { IoSearch } from "react-icons/io5";
import "./styles.scss";
export default function SideHeader() {
  return (
    <div className="side-header">
      <div className="icon-container circle-head">
        <IoSearch className="side-header-icon" size={30} />
      </div>
    </div>
  );
}
