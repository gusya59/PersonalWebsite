import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import contactsBookImg from "../../../images/projects/contactsBook.PNG";

export default class ContactsBook extends Component {
  render() {
    return (
      <Card raised style={{ width: "320px", margin: "1.5em" }}>
        <Image src={contactsBookImg} />
        <Card.Content>
          <Card.Header>Contacts Book</Card.Header>
          <Card.Meta>
            <span className="date">React, JS, HTML, CSS</span>
          </Card.Meta>
          <Card.Meta>
            <span className="date">randomuser API</span>
          </Card.Meta>
          <Card.Description>
            A responsive contacts book application with a built in search.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Content textAlign={"center"}>
            <Button
              as="a"
              href="https://github.com/gusya59/ContactsBook"
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
