import React from 'react'

// @apollo
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

/**
 * Application GraphQL Connection and Queries
 */
const graph = {
  client: new ApolloClient({
    uri: 'http://taxtherich.valet/graphql',
  }),
  query: {
    action: gql`{
      actions {
        edges {
          node {
            id
            action {
              page {
                heading
                subheading
                featuredImage {
                  guid
                  srcSet
                }
              }
              action {
                heading
                context
                format
                buttonText
                petition {
                  petition
                }
                letter {
                  salutations
                  letter
                  regards
                }
              }
              profile {
                name
                email
                about
                headshot {
                  guid
                  srcSet
                }
              }
              affiliation {
                sector
                company {
                  logo {
                    guid
                    srcSet
                  }
                  company
                  position
                  address {
                    streetAddress
                    latitude
                    longitude
                  }
                }
                elected {
                  jurisdiction
                  party
                  address {
                    streetAddress
                    latitude
                    longitude
                  }
                }
              }
              design {
                colorPrimary
                colorSecondary
                backgroundImage {
                  guid
                  srcSet
                }
              }
            }
          }
        }
      }
    }`,
  },
}

export default graph