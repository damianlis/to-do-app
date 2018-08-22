import React, { Component } from "react";
import Cards from "./Cards.jsx";
import Login from "./Login.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      newLogin: ""
    };
  }
  handleLogin = loginValue => {
    this.setState({
      newLogin: loginValue
    });
  };
  handleLogOut = () => {
    this.setState({
      newLogin: ""
    })
  }
  componentDidMount() {
    fetch("http://127.0.0.1:5000/api/board")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cards: data.lists
        });
      });
  }
  render() {
    if (!this.state.newLogin) {
      return (
        <div>
          <h1>Board of Tasks</h1>
          <Login loginInfo={this.handleLogin} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Board of Tasks</h1>
          <Cards cards={this.state.cards} loginInfo={this.state.newLogin} logOut={this.handleLogOut} />
        </div>
      );  
    }
  }
}
