import React, { Component } from "react";
import { Container, Menu, Visibility } from "semantic-ui-react";
import "./PageNavigation.css";

const menuStyle = {
  border: "none",
  backgroundColor: "#e6e6e6",
  borderRadius: 1,
  boxShadow: "none",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

const fixedMenuStyle = {
  backgroundColor: "#e6e6e6",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

export default class PageNavigation extends Component {
  state = {
    menuFixed: false,
  };
  stickTopMenu = () => this.setState({ menuFixed: true });

  render() {
    const { menuFixed } = this.state;
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container>
              {/* <Menu.Item header>Alina Gusev</Menu.Item> */}
              <Menu.Item as="a" href="/#about">
                About
              </Menu.Item>

              <Menu.Item as="a" href="/#portfolio">
                Portfolio
              </Menu.Item>
              <Menu.Item as="a" href="/#additionalInfo">
                Info
              </Menu.Item>
              <Menu.Item as="a" href="/#contacts">
                Contacts
              </Menu.Item>

              <Menu.Menu position="right"></Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}
