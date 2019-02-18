import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Benjamin Kleeman is an IT student and an aspiring developer. He enjoys music production/recording, spending time with his family, and cooking in his spare time.
    </p>
    <img
        src="https://images.pexels.com/photos/170290/pexels-photo-170290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="A smiling picture of the site's creator."
      />
    <a href="https://www.github.com/bkleeman">Follow me on Github</a>
  </Layout>
)

// Page query -- only page components can make page queries
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`