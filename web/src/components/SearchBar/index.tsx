import React from "react";
import "./styles.scss";
import { IoSearch } from "react-icons/io5";

interface Props {
  placeholder: string;
}

export default function SearchBar({ placeholder }: Props) {
  return (
    <div className="search-bar-container">
      <IoSearch className="search-bar-icon" size={25} />
      <input
        className="search-bar-input"
        placeholder={placeholder}
        name=""
        id=""
      />
    </div>
  );
}
