import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
        <div>
            <h1>Site Files</h1>
            <p>This is the result of running a GraphQL query pulling data from the gatsby-source-filesystem plugin. Future To-Do: Filter data pulled by file type.</p>
            <table>
                <thead>
                    <tr>
                        <th>File Path</th>
                        <th>File Size</th>
                        <th>File Extension</th>
                        <th>Time Created</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>  
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`