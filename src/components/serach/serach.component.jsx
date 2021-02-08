import React from "react";
import "./serach.styles.css";

export const Search = ({ placeholder, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={handleChange}
      type="serach"
    ></input>
  );
};
