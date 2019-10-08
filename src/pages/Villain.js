// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams } from 'react-router'

// @antd
import { Typography } from 'antd'

// components
import VillainComponent from '../components/villain/SingleVillain'

const Villain = () => {
  let { slug } = useParams()
  const { data } = useQuery(gql`
    {
      villains (where: {name: "${slug}"}) {
        edges {
          node {
            id
            villain {
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
  `)

  const villain = data && data.villains && data.villains.edges[0].node.villain

  return villain && villain.profile ? (
    <Typography>
      <VillainComponent villain={villain} />
    </Typography>
  ) : <p>Loading..</p>
}

export default Villain