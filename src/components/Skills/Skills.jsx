import React from "react";

import { Message, Label, Segment, Header } from "semantic-ui-react";

export const Skills = () => {
  const sections = [
    {
      label: "Primary",
      title: "Front End",
      skills: ["HTML", "CSS", "Javascript", "React", "Redux", "React Native"]
    },
    {
      label: "Secondary",
      title: "Back End",
      skills: ["Node", "Express", "Python", "Django", "MongoDB", "SQL"]
    },
    {
      label: "Secondary",
      title: "Dev Ops",
      skills: ["Git", "Heroku", "AWS", "Docker", "Jira", "Pivotal Tracker"]
    }
  ];

  return sections.map(section => (
    <Segment raised>
      {section.label && (
        <Label color="teal" ribbon>
          {section.label}
        </Label>
      )}
      <Header as="h1">{section.title}</Header>
      {section.skills.map(skill => (
        <Label size="huge" key={skill}>
          {skill}
        </Label>
      ))}
    </Segment>
  ));
};
