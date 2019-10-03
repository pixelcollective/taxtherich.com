// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @antd
import { Row, Col } from 'antd'
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
    <Row>
      {data.actions.edges.map(({ node: { action: { design, action, page } } }) => (
        <Col>{action.heading}</Col>
      ))}
    </Row>
  ) : null

  return render
}

export default Actions