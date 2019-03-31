import React from "react";

import {
  BodyContainer,
  ProfileImage,
  Greeting,
  ConnectionList,
  ConnectionItem,
  ConnectionIcon
} from "../StyledComponents";

import profileImage from "../../assets/profile.jpeg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedinblack.png";

export const Me = () => (
  <div>
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
