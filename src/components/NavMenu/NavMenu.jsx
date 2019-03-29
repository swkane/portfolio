import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./NavMenu.css";

export default class NavMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu id="nav-menu" secondary>
        <Menu.Menu position="right">
          <Link to="/">
            <Menu.Item
              name="me"
              active={activeItem === "me"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/portfolio">
            <Menu.Item
              name="portfolio"
              active={activeItem === "portfolio"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/skills">
            <Menu.Item
              name="skills"
              active={activeItem === "skills"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/contact">
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
