import React, { Component } from "react";
import { Card, Container, Header } from "semantic-ui-react";

import ContactsBook from "../portfolio/projectCards/ContactsBook";
import WeatherApp from "../portfolio/projectCards/WeatherApp";
import ReactCalculator from "../portfolio/projectCards/ReactCalculator";
import BGM from "../portfolio/projectCards/BGM";
import "./Portfolio.css";

export default class Portfolio extends Component {
  render() {
    return (
      <Container fluid>
        <Header className="portfolioTitle" as="h1">
          Check the magic
        </Header>
        <Container>
          <Card.Group doubling centered>
            <ContactsBook /> {/* first project */}
            <WeatherApp /> {/* second project */}
            <ReactCalculator /> {/* third project */}
            <BGM /> {/*  fourth project */}
          </Card.Group>
        </Container>
      </Container>
    );
  }
}
