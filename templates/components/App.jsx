import React, { Component } from "react";
import Cards from "./Cards.jsx";
import CardCreator from './CardCreator.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }
  componentDidMount() {
    fetch("http://127.0.0.1:5000/api/board")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cards: data.lists
        })
      });
  }
  render() {
    return (
      <div>
        <h1>Board of Tasks</h1>
        {/* <Cards cards={this.state.cards} /> */}
        <CardCreator />
      </div>
    );
  }
}
