import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  z-index: 0;
  display: flex;
  flex-direction: column;
  padding: 0 30px 60px;
  overflow: hidden;
`;

const Header = ({ siteTitle }) => (
  <Section>
    <div
      style={{
          zIndex: 1,
          margin: '100px auto',
          maxWidth: '900px'
      }}
    >
        <h1><strong>gui</strong> — GitHub readme UI components</h1>
        <Link to="/">{siteTitle}</Link>
    </div>
  </Section>
);

export default Header
