import "./App.css";

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Profile from "./components/Profile";
export default class App extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div>
        <Button
          variant="outline-dark"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          Show profile
        </Button>
        {this.state.show ? <Profile /> : null}
      </div>
    );
  }
}
