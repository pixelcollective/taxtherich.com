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

// components
import PageHeader from './../components/header/PageHeader'
import ActionContent from '../components/action/Action'
import { Loading, Error } from './../components/Loaders'

/**
 * Page: Actions
 */
const Actions = () => {
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
        title={`Actions`}
        disabledBack={true}
        excerpt={`Get heard.`} />
      {data.actions.edges.map(({ node: { action: { action } } }) => (
        <Row>
          <Col>
            <ActionContent action={action} />
          </Col>
        </Row>
      ))}
      <Helmet>
        <title>Take Action | Tax The Rich</title>
        <meta name="description" content={`America's wealthiest citizens don't pay a dime in taxes. No fair!`} />
      </Helmet>
    </Box>
  ) : null

  return render
}

export default Actions