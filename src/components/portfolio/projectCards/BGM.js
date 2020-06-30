import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import bgmImg from "../../../images/projects/bgm.png";

class BGM extends Component {
  render() {
    return (
      <Card raised style={{ width: "320px", margin: "1.5em" }}>
        <Image src={bgmImg} />
        <Card.Content>
          <Card.Header>BGM Solutions</Card.Header>
          <Card.Meta>
            <span className="date">
              TypeScript, JavaScript, HTML, CSS, Angular 7, NodeJS, Express,
              MongoDB
            </span>
          </Card.Meta>
          <Card.Description>
            This is a Graduation Project (Nominated for excellence). BGM
            Solution allows company to plan and calculate it's budget for a
            digital media advertisement. Each individual calculation is based on
            the company specifications and preferences. The result presents the
            budget for a different types of media platforms that are easily
            adjustable. Strong sides: Fast speed of calculations, automated
            adjustable questionnaire, modularity, calculation values can be
            easily changed by admin and the app can be used for a different
            types of calculations.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Content textAlign={"center"}>
            <Button
              as="a"
              href="https://github.com/gusya59/BGMSolution"
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

export default BGM;
