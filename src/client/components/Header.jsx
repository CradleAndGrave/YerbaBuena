import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

// TODO: update call to redux store to populate fields
// TODO: Flexbox
// TODO: update logout route

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Yerba Buena</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem>
        Logout
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
