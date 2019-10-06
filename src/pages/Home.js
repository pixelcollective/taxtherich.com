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
import Villains from '../components/villain/Villains'
import { Loading, Error } from './../components/Loaders'

/**
 * Page: Home
 */
const Home = () => {
  const { data, loading, error } = useQuery(gql`
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
            }
          }
        }
      }
    }
  `)

  const action = data && data.actions && data.actions.edges.length > 0 && data.actions.edges[0].node.action

  const render = loading ? <Loading /> : error ? <Error /> : action ? (
    <Box style={{ padding: `50px` }}>
      <PageHeader
        title={`Tax The Rich`}
        disabledBack={true}
        excerpt={`We have reached a point where over 70% of Americans now believe that the economy is rigged against them.`} />
      <SingleAction action={action.action} />
      <Villains />
      <Helmet>
        <title>Tax The Rich</title>
        <meta name="description" content={`America's wealthiest citizens don't pay a dime in taxes. No fair!`} />
      </Helmet>
    </Box>
  ) : <Loading />

  return render
}

export default Home