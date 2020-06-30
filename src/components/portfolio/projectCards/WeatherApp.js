import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import weatherAppImg from "../../../images/projects/weatherApp.png";

class WeatherApp extends Component {
  render() {
    return (
      <Card raised style={{ width: "320px", margin: "1.5em" }}>
        <Image src={weatherAppImg} size="small" centered />
        <Card.Content>
          <Card.Header>Weather Application</Card.Header>
          <Card.Meta>
            <span className="date">React, JS, HTML, CSS</span>
          </Card.Meta>
          <Card.Meta>
            <span className="date">Google Geolocation API</span>
          </Card.Meta>
          <Card.Description>
            A weather application that allows you to check the weather at you
            current location.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Content textAlign={"center"}>
            <Button
              as="a"
              href="https://github.com/gusya59/WeatherApp"
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

export default WeatherApp;
