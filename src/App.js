import React from "react";
import "./App.css";
import { UsersList } from "./components/users-list/users-list.component";
import { Search } from "./components/serach/serach.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Tom",
      users: [],
      searchField: "",
    };
  }
  componentDidMount() {
    const BASE_URL = "https://dummyapi.io/data/api";
    const APP_ID = "601e3fd68c2d1bc0e46b84c3";

    fetch(`${BASE_URL}/user`, {
      headers: { "app-id": APP_ID },
    })
      .then((response) => response.json())
      .then((users) =>
        users ? this.setState({ users: users.data }, console.log(users)) : null
      );
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const FilteredUser = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="page_wrap">
        <header>
          <h1>Expertos</h1>
          <Search
            placeholder="Search User"
            handleChange={this.handleChange}
          ></Search>
        </header>

        <UsersList users={FilteredUser}></UsersList>
      </div>
    );
  }
}
export default App;
