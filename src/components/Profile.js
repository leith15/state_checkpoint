import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Card, Button } from "react-bootstrap";

const personne = {
  fullName: "x",
  bio: "x",
  imgSrc: "./ProfilPhoto.png",
  profession: "x",
};

const handleAlert = (name) => {
  alert(`hi I am ${name}`);
};

export default class Profile extends Component {
  state = {
    personne,
  };
  render() {
    return (
      <div>
        <Card style={{ width: "27rem" }}>
          <Card.Img variant="top" />
          <img src={this.state.personne.imgSrc} />
          <Card.Body>
            <Card.Title className="title">Information</Card.Title>
            <Card.Text>
              <p>{this.state.personne.fullName}</p>
              <p>{this.state.personne.bio}</p>
              <p>{this.state.personne.profession}</p>
            </Card.Text>
          </Card.Body>

          <Button
            variant="primary"
            onClick={() => handleAlert(this.state.personne.fullName)}
          >
            Show_info
          </Button>
        </Card>
      </div>
    );
  }
}
