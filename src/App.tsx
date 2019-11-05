import React from 'react';
import { Container, GridThemeProvider } from 'styled-bootstrap-grid';

// import Editor from './components/editor';
import ComponentSwitcher from './components/component-switcher';
import ShieldsBadges from './components/shields-badges';

function App() {
  return (
    <GridThemeProvider>
      <Container style={{ maxWidth: '980px' }}> { /* is the size of github body-box*/ }
        <ComponentSwitcher defaultText='Project Title' element='h1' textElement='input'/>
        <ShieldsBadges/>
      </Container>
    </GridThemeProvider >
  );
}

export default App;
