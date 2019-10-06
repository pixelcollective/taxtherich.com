// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams } from 'react-router'

// @antd
import { Box } from 'rebass'

// components
import ActionComponent from '../components/action/SingleAction'
import PageHeader from '../components/header/PageHeader'
import { Loading } from '../components/Loaders'

const Action = () => {
  let { slug } = useParams()
  const { data } = useQuery(gql`
    {
      actions (where: {name: "${slug}"}) {
        edges {
          node {
            id
            action {
              action {
                actionNetworkId
                context
                heading
                petition
              }
            }
          }
        }
      }
    }
  `)

  data && console.log(data)

  const action = data && data.actions && data.actions.edges[0].node.action

  return action ? (
    <>
      <Box style={{ padding: `50px` }}>
        <PageHeader
          title={`Take Action`}
          excerpt={action.action.heading} />
        <ActionComponent action={action.action} />
      </Box>
    </>
  ) : <Loading />
}

export default Action