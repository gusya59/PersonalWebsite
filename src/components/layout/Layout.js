import React, { Component } from "react";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";
import PageNavigation from "../header/PageNavigation";
import Welcome from "../welcome/Welcome";
import AdditionalInfo from "../additionalInfo/AdditionalInfo";
import { Container } from "semantic-ui-react";
import "./Layout.css";
export default class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <div className="pageNavigation">
          <PageNavigation />
        </div>
        <div className="welcome">
          <Welcome />
        </div>
        <div className="about" id="about">
          <About />
        </div>
        <div className="divider div-transparent" id="portfolio"></div>
        <div className="portfolio">
          <Portfolio />
        </div>
        <div className="divider div-transparent" id="additionalInfo"></div>
        <div className="additionalInfo">
          <AdditionalInfo />
        </div>
        <div className="divider div-transparent" id="contacts"></div>
        <div className="contacts">
          <Contacts />
        </div>
        <div className="divider div-transparent"></div>
        <div className="footer">
          <Footer />
        </div>
      </Container>
    );
  }
}
