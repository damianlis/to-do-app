import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: ""
    };
  }
  handleLoginInput = event => {
    this.setState({
      loginInfo: event.target.value
    });
  };
  submitLogin = () => {
    this.props.loginInfo(this.state.loginInfo);
  };
  render() {
    return (
      <div>
        <h2>Logowanie</h2>
        <input
          type="text"
          placeholder="Enter login"
          value={this.state.loginInfo}
          onChange={this.handleLoginInput}
        />
        <button type="submit" onClick={this.submitLogin}>Send</button>
      </div>
    );
  }
}
