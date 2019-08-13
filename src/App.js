import React from 'react';
import { Router } from '@reach/router'
import Store from './pages/Store'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="responsive-navigation"></nav>
      <Router>
        <Store path="/store" />
      </Router>
    </div>
  );
}

export default App;
