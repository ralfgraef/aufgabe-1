import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    persons: [
      { userName: "Ralf" },
      { userName: "Max" },
      { userName: "Anne" },
      { userName: "Gurkenkopf" }
    ]
  };
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput userName={this.state.persons[0].userName} />
        <UserOutput userName={this.state.persons[1].userName} />
        <UserOutput userName={this.state.persons[2].userName} />
        <UserOutput userName={this.state.persons[3].userName} />
      </div>
    );
  }
}

export default App;
