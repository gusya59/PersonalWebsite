import React, { Component } from "react";
import { List, Header, Image, Container } from "semantic-ui-react";
import "./AdditionalInfo.css";

import lecture0 from "../../images/lectures/0.jpg";
import lecture1 from "../../images/lectures/1.jpg";

class AdditionalInfo extends Component {
  render() {
    return (
      <Container fluid className="additionalInfo">
        <Header as="h1" className="addInfoHeader">
          You can also find me
        </Header>

        <div className="infoBlock">
          <Header as="h4">
            Mentoring at <a href="https://she-codes.org/">she-codes;</a>
          </Header>
          <span className="textBlock">
            she codes; is a community of women established with the goal of
            reaching 50% women software developers in the Israeli high-tech
            scene. I am currently mentoring a Web Basic Course and Git Course at
            she-codes;
          </span>
        </div>
        <div className="infoBlock">
          <Header as="h4">
            Giving lectures on web development and technology
          </Header>
          <span className="textBlock">
            <Image.Group size="small">
              <Image src={lecture0}></Image>
              <Image src={lecture1}></Image>
            </Image.Group>
          </span>
        </div>
        <div className="infoBlock">
          <Header as="h4">Bloging </Header>
          <List bulleted>
            <List.Item>
              Building a Simple Calculator with React, React Hooks and Grid.
              <a href="https://medium.com/@gusya59/building-a-simple-calculator-with-react-react-hooks-and-grid-f6724baed5e?source=friends_link&sk=864a9d2fa5e60e65e0d3367c4ea9cd13">
                {" "}
                Check it on Medium
              </a>
            </List.Item>
          </List>
        </div>
      </Container>
    );
  }
}

export default AdditionalInfo;
