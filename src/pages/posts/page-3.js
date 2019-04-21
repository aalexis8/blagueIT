import React from 'react'
import Layout from '../../components/layout'
import { graphql, StaticQuery, Link } from 'gatsby'

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthtime
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <h1>Hello from Page 3!</h1>
    <h3>Image File Data</h3>
    <br />
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative Path</th>
              <th>Size of Image</th>
              <th>Extension</th>
              <th>Birthtime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    <Link to="/page-2"> Page 2</Link>
    <br />
    <Link to="/"> Home</Link>
  </Layout>
)
