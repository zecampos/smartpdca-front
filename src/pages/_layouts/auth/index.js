import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

export default function AuthLayout({ children }) {
  return <Container fluid>{children}</Container>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
