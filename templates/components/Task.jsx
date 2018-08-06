import React, { Component } from "react";

export default class Task extends Component {
  constructor(props) {
    super(props);
  }
  handleDeleteTask = id => {
      this.props.deleteTask(this.props.id);
  }
  render() {
    return (
      <li className="task">
        {this.props.text}
        <span className="delete" onClick={this.handleDeleteTask} />
      </li>
    );
  }
}
