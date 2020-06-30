import React, { Component } from "react";

import { Button, Icon, Container } from "semantic-ui-react";
import "./Welcome.css";
export default class Welcome extends Component {
  render() {
    return (
      <Container>
        <div className="welcomeText">Welcome</div>
        <div className="downButton">
          <Button basic icon as="a" href="/#about">
            <Icon name="angle double down" size={"huge"} color={"black"} />
          </Button>
        </div>
      </Container>
    );
  }
}
