import React from 'react';
import PropTypes from 'prop-types';
import { Container, Navbar } from 'react-bootstrap';
import NavBar from '../../../components/NavBar';

export default function DefaultLayout({ children }) {
  return (
    <Container fluid>
      <NavBar />
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
