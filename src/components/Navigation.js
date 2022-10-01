import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" color="dark" dark {...args}>
        <NavbarBrand href="/">Toy Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink tag={RouterLink} to="/home">
              Home
            </NavLink>
            <NavLink tag={RouterLink} to="/add-product">
              Add Product
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;