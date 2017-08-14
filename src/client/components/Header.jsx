import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';


// TODO: update call to redux store to populate fields
// TODO: Flexbox
// TODO: update logout route

const Header = () => (
  <Navbar className="navbar" inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand className="brand">
        <a href="/">Yerba Buena</a>
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
