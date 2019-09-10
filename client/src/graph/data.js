import React from 'react'
import gql from 'graphql-tag'

const data = {
  actions: gql`
    {
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
    }
  `
}

export default data