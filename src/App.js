import React from 'react';
import { Router } from '@reach/router'
import logo from './logo.svg';
import ResponsiveNavigation from './components/ResponsiveNavigation'
import './App.css';

function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Store',
      path: '/store',
      icon: 'ion-ios-analytics'
    }
  ]
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={ navLinks }
        logo={ logo }
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        {
          navLinks.length && navLinks.map((link, idx) => {
              const component = require(`./pages/${link.text}.jsx`).default
              return React.createElement(component, { path: link.path, key: idx })
          })
        }
      </Router>
    </div>
  );
}

export default App;
