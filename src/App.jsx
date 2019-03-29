import React, { Component } from "react";

import "./App.css";
import {
  Header,
  HeaderItem,
  BodyContainer,
  ProfileImage,
  Greeting,
  ConnectionList,
  ConnectionItem,
  ConnectionIcon
} from "./components/Header";

import profileImage from "./assets/profile.jpeg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedinblack.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <HeaderItem>Me</HeaderItem>
          <HeaderItem>Portfolio</HeaderItem>
          <HeaderItem>Skills</HeaderItem>
          <HeaderItem>Contact</HeaderItem>
        </Header>
        <BodyContainer>
          <ProfileImage src={profileImage} />
          <Greeting>Hello, I'm Sam!</Greeting>
          <ConnectionList>
            <ConnectionItem>
              <a href="https://github.com/swkane">
                <ConnectionIcon src={github} />
              </a>
              <a href="https://www.linkedin.com/in/samuelwkane/">
                <ConnectionIcon src={linkedin} />
              </a>
            </ConnectionItem>
          </ConnectionList>
        </BodyContainer>
      </div>
    );
  }
}

export default App;
