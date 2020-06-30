import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Container fluid textAlign="center">
        <Header as="h3">@2020 Copyrigth: Alina Gusev</Header>
      </Container>
    );
  }
}
