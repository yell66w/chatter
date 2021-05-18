import SearchBar from "@components/SearchBar";
import { useAuth } from "@context/User/UserProvider";
import React from "react";
import { IoSearch } from "react-icons/io5";
import "./styles.scss";
export default function SideHeader() {
  const auth = useAuth();
  return (
    <div className="side-header">
      <h1 style={{ color: "white" }}>Hello, {auth.user?.name}</h1>
      <SearchBar placeholder="Search Chatter" />
      {/* <div className="icon-container square-icon">
        <IoSearch className="side-header-icon" size={30} />
      </div> */}
    </div>
  );
}
