import React from "react";
import { Card, Image } from "semantic-ui-react";

import "./Portfolio.css";
import kenzieOnline from "../../assets/kenzieonlinealt.png";
import artPress from "../../assets/artpress.png";
import truckScheduling from "../../assets/truckscheduling.png";
import reactNativeCourse from "../../assets/reactnativecourse.png";

const Portfolio = () => {
  const content = [
    {
      image: kenzieOnline,
      header: "Kenzie Online",
      description:
        "Kenzie Online is a Learning Management System for a Code and Design School that provides a platform for students to consume content, submit assignments, and track their progress through Kenzie Curriculum.",
      techStackInfo: "React, Redux, Python, Django, AWS, Docker"
    },
    {
      image: artPress,
      header: "The Art Press",
      description:
        "The Art Press is a design-centric printing shop in Indianapolis. Their site serves market their brand, show off their work, and provide a portal for potential customers to recieve a quote estimate.",
      techStackInfo: "HTML, CSS, Javascript, jQuery, AdonisJs, AirTable"
    },
    {
      image: truckScheduling,
      header: "Truck Scheduling App",
      description:
        "The Truck Scheduling App is an internal tool for a company to use to manage their truck drivers as they service restuarant kitchens that need to dispose of their cooking oil.",
      techStackInfo: "React, Redux, Node, Express, MongoDB, AWS, Docker"
    },
    {
      image: reactNativeCourse,
      header: "Introduction to React Native",
      description:
        "I created an Introduction to React Native course. The course covers the basics of React Native and is created for a developer who understands the fundamentals of React such as components, props, and state.",
      techStackInfo: "React Native, Expo"
    }
  ];

  return (
    <Card.Group id="portfolio-container" itemsPerRow={2}>
      {content.map((card, i) => (
        <Card key={i}>
          <Image src={card.image} />
          <Card.Content>
            <Card.Header>{card.header}</Card.Header>
            <Card.Description>{card.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Card.Meta id="meta-header">Tech Stack</Card.Meta>
            {card.techStackInfo}
          </Card.Content>
        </Card>
      ))}
      ;
    </Card.Group>
  );
};

export default Portfolio;
