import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import Header from './header'

type LayoutProps = {
    children: React.ReactNode
}
const GlobalStyle = createGlobalStyle`
  html {
    background-color: rgb(255, 255, 255);
  }
`;

export default class Layout extends React.Component<LayoutProps> {
    render () {
        return (
            <StaticQuery
                query={graphql`
                  query SiteTitleQuery {
                    site {
                      siteMetadata {
                        title
                      }
                    }
                  }
                `}
                render={
                  data => (
                      <>
                          <Helmet
                              title={data.site.siteMetadata.title}
                              meta={[
                                  { name: 'description', content: 'Sample' },
                                  { name: 'keywords', content: 'sample, something' },
                              ]}
                          >
                              <html lang="en" />
                          </Helmet>
                        <GlobalStyle/>
                          <Header siteTitle={data.site.siteMetadata.title} />
                          {this.props.children}
                      </>
                  )
                }
            />
        );
    }
};
