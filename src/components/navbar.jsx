import React, { Component } from "react";
import { Row, Navbar } from "react-bootstrap";
import logo from "./dog.png";
// MUI
import Avatar from "@material-ui/core/Avatar";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import Container from "@material-ui/core/Container";
// Icons
import Brightness5TwoToneIcon from "@material-ui/icons/Brightness5TwoTone";
import NightsStayTwoToneIcon from "@material-ui/icons/NightsStayTwoTone";

class NavBar extends Component {
  state = {
    switchToggled: false,
  };

  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>
          <Container display="flex">
            <Row>
              <Brightness5TwoToneIcon />
              <Tooltip title="Not yet implemented.">
                <Switch
                  name="mode-switch"
                  color="primary"
                  size="small"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Tooltip>
              <NightsStayTwoToneIcon />
            </Row>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <img
            src={logo}
            alt=""
            height={40}
            width={40}
            style={{ marginLeft: 380 }}
          ></img>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Avatar src="/broken-image.jpg" />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
