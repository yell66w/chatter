import React from "react";
import { IoSearch } from "react-icons/io5";
import "./styles.scss";
export default function SideHeader() {
  return (
    <div className="side-header">
      <IoSearch className="side-header-icon" size={30} />
    </div>
  );
}
