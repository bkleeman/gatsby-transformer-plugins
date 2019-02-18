import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <div>
            <h1>Projects</h1>
            <p>This is a collection of very simple and limited projects.</p>
            <table>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Technologies</th>
                        <th>Description</th>
                        <th>Most Recent Update</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td><Link to="my-files">Structured Data Query</Link></td>
                            <td>React, GatsbyJS, GraphQL</td>
                            <td>Using GraphQL queries to pull data from a plugin.</td>
                            <td>2019-02-17</td>
                        </tr>
                </tbody>
            </table>  
        </div>
    </Layout>
)