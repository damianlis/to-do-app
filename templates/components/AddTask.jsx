import React, { Component } from "react";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  handleAddTask = text => {
      this.props.addTask(this.state.text);
  }
  render() {
    return (
      <div className="add-task">
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleAddTask}>
          Add
        </button>
      </div>
    );
  }
}
