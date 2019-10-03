// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams } from 'react-router'

// @rebass
import { Box } from 'rebass'

// @antd
import {
  Typography,
  Divider
} from 'antd'

// components
import VillainComponent from '../components/villain/SingleVillain'
import PageHeader from './../components/header/PageHeader'

const Villain = () => {
  let { slug } = useParams()
  const { data, loading, error } = useQuery(gql`
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

  console.log(villain)

  return villain && villain.profile ? (
    <Typography>
      <VillainComponent villain={villain} />
    </Typography>
  ) : <p>Loading..</p>
}

export default Villain