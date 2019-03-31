import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./NavMenu.css";

export default class NavMenu extends Component {
  state = { activeItem: "me" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu id="nav-menu" size="massive" secondary>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/"
            name="me"
            active={activeItem === "me"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/portfolio"
            name="portfolio"
            active={activeItem === "portfolio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/skills"
            name="skills"
            active={activeItem === "skills"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/contact"
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
