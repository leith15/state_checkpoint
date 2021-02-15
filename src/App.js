import "./App.css";

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Profile from "./components/Profile";
export default class App extends Component {
  state = {
    show: false,
    count: 0,
  };
  componentDidMount() {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }
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
        <p>You have been seeing the page for {this.state.count} seconds</p>
      </div>
    );
  }
}
