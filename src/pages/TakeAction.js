// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-helmet
import { Helmet } from 'react-helmet'

// @rebass
import { Box } from 'rebass'

// components
import PageHeader from '../components/header/PageHeader'
import SingleAction from '../components/action/SingleAction'

const TakeAction = () => {
  const { data } = useQuery(gql`
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
              }
              design {
                colorPrimary
                colorSecondary
                paths
              }
            }
          }
        }
      }
    }
  }`)
  return (
    <Box style={{ padding: `50px` }}>
      <PageHeader
        title={`Tax The Rich`}
        disabledBack={true}
        excerpt={`We have reached a point where over 70% of Americans now believe that the economy is rigged against them.`} />
      <SingleAction action={data.actions.edges[0]} />
    </Box>
  )
}

export default TakeAction