import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListAcoes from '../Acoes';
import NovaAcoes from '../Acoes/Nova';

import NavBar from '../../components/NavBar';

export default function Home() {
  return (
    <Router>
      <NavBar />

      <Route path="/lista" component={ListAcoes} />
      <Route path="/nova" component={NovaAcoes} />
      <Route />
    </Router>
  );
}
