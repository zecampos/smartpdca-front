import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import history from '../../services/history';
import PropTypes from 'prop-types';

export default function NavBarComponent() {
  const link = [
    {
      nome: 'Lista',
      rota: '/',
    },
    {
      nome: 'Nova',
      rota: '/nova',
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Smart PDCA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">Ações</Nav.Link> */}

          <NavDropdown title="Ações" id="collasible-nav-dropdown">
            {link.map(item => (
              <NavDropdown.Item
                key={item.rota}
                onClick={() => history.push(item.rota)}
              >
                {item.nome}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
