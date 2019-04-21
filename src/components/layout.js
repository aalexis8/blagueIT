/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const GET_SITEMETADATA = graphql`
  {
    site {
      siteMetadata {
        title
        author
        createdAt
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={GET_SITEMETADATA}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            {/* © {new Date().getFullYear()}, Built by{' '} */}©{' '}
            {data.site.siteMetadata.createdAt}, Built by{' '}
            {data.site.siteMetadata.author}
            <a href="https://www.blagueIT.com"> BlagueIT</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
