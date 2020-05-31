
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../logo.svg';
import './LayoutNavbar.css';
import RoutesEnum from '../../../Route/RoutesEnum';
import { routesConfig } from '../../../Route/routesConfig';

const LayoutNavbar = () => (
  <>
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={Logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav.Link className={`nav-button white`} as={Link} to={routesConfig[RoutesEnum.LEARN].url}>{routesConfig[RoutesEnum.LEARN].name}</Nav.Link>
        <Nav.Link className={`nav-button white`} as={Link} to={routesConfig[RoutesEnum.MISSIONS].url}>{routesConfig[RoutesEnum.MISSIONS].name}</Nav.Link>
        <Nav.Link className={`nav-button white`} as={Link} to={routesConfig[RoutesEnum.PROFILE].url}>{routesConfig[RoutesEnum.PROFILE].name}</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default LayoutNavbar;