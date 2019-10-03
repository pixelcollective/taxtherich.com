// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-helmet
import { Helmet } from 'react-helmet'

// @rebass
import { Box } from 'rebass'

// @antd
import { Row, Col } from 'antd'

import PageHeader from './../components/header/PageHeader'
import { IndexedAction as Action } from '../components/action/IndexedAction'
import { Loading, Error } from './../components/Loaders'



// exports
const Actions = ({ heading }) => {
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

  const render = loading ? <Loading /> : error ? <Error /> : data ? (
    <Box style={{ padding: `50px` }}>
      <PageHeader
        title={`Tax The Rich`}
        disabledBack={true}
        excerpt={`We have reached a point where over 70% of Americans now believe that the economy is rigged against them.`} />
      {data.actions.edges.map(({ node: { action: { design, action, page } } }) => (
        <Col>
          <Action action={action} />
        </Col>
      ))}
      <Helmet>
        <title>The Villainous Rich</title>
        <meta name="description" content={`America's wealthiest citizens don't pay a dime in taxes. No fair!`} />
      </Helmet>
    </Box>
  ) : null

  return render
}

export default Actions