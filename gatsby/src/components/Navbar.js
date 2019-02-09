import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 4) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              TAX THE RICH
            </Link>
          </div>
          <div className="navbar-start">
            {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))}
          </div>
          <div className="navbar-end">
              <a href="https://github.com/pixelcollective/taxtherich.com">Source Code</a>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
