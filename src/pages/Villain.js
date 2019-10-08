// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams } from 'react-router'

// @react-helmet
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <title>`${villain.profile.name} needs to pay their taxes.`</title>
        <meta property="og:url" content={`https://taxtherich.com/villains/${slug}`} />
        <meta property="og:type" content={`article`} />
        <meta property="og:title" content={`${villain.profile.name} needs to pay their taxes.`} />
        <meta property="og:image" content={villain.page.featuredImage && villain.page.featuredImage.guid} />
      </Helmet>
    </Typography>
  ) : <p>Loading..</p>
}

export default Villain