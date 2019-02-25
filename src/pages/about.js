import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1
      css={css`text-align: justify;
      `}
    >About {data.site.siteMetadata.title}</h1>
    <p>
      Benjamin Kleeman is an IT student and an aspiring developer. He enjoys music production/recording, spending time with his family, and cooking in his spare time.
    </p>
    <img
        css={css`
        height: 25rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        `}
        src="https://avatars3.githubusercontent.com/u/20052075?s=460&v=4"
        alt="A smiling picture of the site's creator."
      />
    <br></br>
    <a
      css={css`
      display: block;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      `} 
      href="https://www.github.com/bkleeman">Follow me on Github</a>
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