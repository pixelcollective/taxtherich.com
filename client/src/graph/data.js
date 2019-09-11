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
                actionNetworkId
                heading
                context
              }
              profile {
                name
                about
                headshot {
                  guid
                  srcSet
                }
              }
              design {
                colorPrimary
                colorSecondary
              }
            }
          }
        }
      }
    }
  `
}

export default data