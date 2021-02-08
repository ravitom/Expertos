import React from "react";
import "./users-list.styles.css";

import { User } from "../users/user.component";

export const UsersList = ({ users }) => {
  return (
    <div className="userslist">
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
};
