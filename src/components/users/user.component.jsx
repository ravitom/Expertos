import React from "react";
import "./user.styles.css";

export class User extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  fetchPosts = () => {
    const BASE_URL = "https://dummyapi.io/data/api";
    const APP_ID = "601e3fd68c2d1bc0e46b84c3";

    fetch(`${BASE_URL}/user/${this.props.user.id}`, {
      headers: { "app-id": APP_ID },
    }).then((response) => response.json());
  };
  render() {
    const { firstName, email, lastName, picture, title, id } = this.props.user;
    return (
      <div onClick={this.fetchPosts} className="user-card ">
        <img alt={firstName} src={picture}></img>
        <h4 className="title">
          {title[0].toUpperCase() + title.slice(1)}. &nbsp;&nbsp;
          {firstName}&nbsp;
          {lastName}
        </h4>
        <p>{email}</p>
      </div>
    );
  }
}
