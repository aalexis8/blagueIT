import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <h1>Hello from Page 3!</h1>
    <br />
    <Link to="/page-2"> Page 2</Link>
    <br />
    <Link to="/"> Home</Link>
  </Layout>
)
