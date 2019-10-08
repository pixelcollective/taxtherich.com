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
            slug
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
      {data.actions.edges.map(({ node }) => (
        <Row>
          <Col>
            <ActionContent action={node} />
          </Col>
        </Row>
      ))}
      <Helmet>
        <title>Take Action | Tax the Rich</title>
        <meta property="og:url" content={`https://taxtherich.com/actions`} />
        <meta property="og:type" content={`article`} />
        <meta property="og:title" content={`Take Action - Tax The Rich`} />
        <meta property="og:image" content={`https://data.tinypixel.dev/app/uploads/sites/2/2019/10/patricia-valerio-c3faD7HE6io-unsplash.jpg`} />
      </Helmet>
    </Box>
  ) : null

  return render
}

export default Actions