import React, { Component } from "react";
import TaskList from "./TaskList.jsx";

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }
  submitLogOut = () => {
    this.props.logOut();
  };
  render() {
    let cards = this.props.cards.map((list, index) => {
      return (
        <TaskList key={index} id={index} name={list.name} tasks={list.tasks} />
      );
    });
    return (
      <div className="container">
        <h2>Cześć {this.props.loginInfo}</h2>
        <button type="submit" onClick={this.submitLogOut}>
          Wyloguj
        </button>
        {cards}
      </div>
    );
  }
}
