import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import headImg from "../../images/img-header.jpg";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <Container text className="about">
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image
                className="img"
                src={headImg}
                centered
                size="medium"
                circular
              />
            </Grid.Column>
            <Grid.Column verticalAlign="middle" textAlign="center">
              <p className="aboutText">
                Hey! I'm Alina, a Web Developer and Coding Enthusiast who likes
                to share programming goodness with the community.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
