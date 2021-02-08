import React from "react";
import "./user.styles.css";

export const User = ({ user }) => {
  return (
    <div className="user-card">
      <img alt={user.firstName} src={user.picture}></img>
      <h4 className="title">
        {user.title[0].toUpperCase() + user.title.slice(1)}. &nbsp;&nbsp;
        {user.firstName}&nbsp;
        {user.lastName}
      </h4>
      <p>{user.email}</p>
    </div>
  );
};
