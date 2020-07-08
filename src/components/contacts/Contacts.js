import React, { Component } from "react";
import {
  Grid,
  Header,
  Icon,
  Button,
  Container,
  Responsive,
  Image,
} from "semantic-ui-react";

import "./Contacts.css";
import contactsImg from "../../images/contactsImage.jpg";

export default class Contacts extends Component {
  render() {
    return (
      <Container fluid>
        <Grid className="contactsGrid">
          <Grid.Row>
            <Header as="h1">Let's create some magic together!</Header>
          </Grid.Row>
          <Grid.Row className="contactsText">
            <Grid.Column width={10}>
              <Grid.Row>
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
                <br />
              </Grid.Row>
              <Grid.Row>
                <Icon circular name="mail" />
                <a href="mailto:alina.gusev@gmail.com">alina.gusev@gmail.com</a>
              </Grid.Row>
              <Grid.Row>
                <Icon circular name="arrow alternate circle right outline" />
                <a href="https://www.fiverr.com/share/WewLkR">
                  Choose a gig on Fiverr
                </a>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column textAlign={"center"} width={5}>
              <div className="icons">
                <Button
                  circular
                  secondary
                  basic
                  icon
                  as="a"
                  href="https://www.linkedin.com/in/alina-gusev-developer/"
                >
                  <Icon name="linkedin" size={"large"} />
                </Button>
                <Button
                  circular
                  secondary
                  basic
                  icon
                  as="a"
                  href="https://github.com/gusya59"
                >
                  <Icon name="github" size={"large"} />
                </Button>
                <Button
                  circular
                  secondary
                  basic
                  icon
                  as="a"
                  href="https://twitter.com/gusya59"
                >
                  <Icon name="twitter" size={"large"} />
                </Button>

                <Button
                  circular
                  secondary
                  basic
                  icon
                  as="a"
                  href="https://medium.com/@gusya59"
                >
                  <Icon name="medium m" size={"large"} />
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Responsive
          as={Image}
          minWidth={769}
          className="contactsImage"
          src={contactsImg}
        />
      </Container>
    );
  }
}
