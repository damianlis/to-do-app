import React, { Component } from "react";
import Task from "./Task.jsx";
import AddTask from "./AddTask.jsx";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    };
  }
  deleteTask = id => {
    fetch(`/api/${this.props.id}/task/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        let tasks = this.state.tasks;
        tasks.splice(id, 1);
        this.setState({
          tasks: tasks
        });
      })
      .catch(error =>
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        )
      );
  };
  addTask = text => {
    const formData = new FormData();
    formData.append("text", text);
    fetch(`/api/${this.props.id}/task`, {
      method: "PUT",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          tasks: [...this.state.tasks, data]
        });
      })
      .catch(error =>
        console.log(
          "There has been a problem with your fetch operation: ",
          error.message
        )
      );
  };
  render() {
    let task_list = this.state.tasks.map((task, index) => {
      return (
        <Task
          key={index}
          id={index}
          text={task.text}
          deleteTask={this.deleteTask}
        />
      );
    });
    return (
      <div className="task-list">
        <h1 className="list-title">{this.props.name}</h1>
        <ul className="list-tasks">{task_list}</ul>
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}
