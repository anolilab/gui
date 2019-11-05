import * as React from 'react'
import { Container, Row, GridThemeProvider } from 'styled-bootstrap-grid';

import Layout from '../components/layout'
import Editor from '../components/editor';
import ComponentSwitcher from '../components/component-switcher';
import ShieldsBadges from '../components/shields-badges';

const IndexPage = () => (
  <Layout>
    <GridThemeProvider>
      <Container style={{ maxWidth: '980px' }}> { /* is the size of github body-box*/ }
        <ComponentSwitcher defaultText='Project Title' element='h1' textElement='input'/>
        <ShieldsBadges/>
      </Container>
    </GridThemeProvider >
  </Layout>
);

export default IndexPage
