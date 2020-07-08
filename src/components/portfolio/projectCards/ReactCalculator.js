import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import reactCalcImg from "../../../images/projects/react-calc.jpg";

class ReactCalculator extends Component {
  render() {
    return (
      <Card raised style={{ width: "320px", margin: "1.5em" }}>
        <Image src={reactCalcImg} textalign="center" size="small" centered />
        <Card.Content>
          <Card.Header>Simple React Calculator</Card.Header>
          <Card.Meta>
            <span className="date">React, JavaScript, HTML, CSS</span>
          </Card.Meta>
          <Card.Description>
            A simple responsive React Calculator with Grid and React Hooks.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Content textAlign={"center"}>
            <Button
              as="a"
              href="https://github.com/gusya59/React-Calculator"
              circular
              secondary
              basic
              icon="github"
            ></Button>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

export default ReactCalculator;
