import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => (
  <Navbar className="navbar navbar-fixed-top" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand className="brand">
        <Link to="/">Yerba Buena</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem>
        <Link className="logout" to={'/logout'}>Logout</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
