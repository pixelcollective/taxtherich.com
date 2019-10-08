// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// react-helmet
import { Helmet } from 'react-helmet'

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
            slug
            title
            excerpt
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
                context
                petition
              }
            }
          }
        }
      }
    }
  `)

  const action = data && data.actions && data.actions.edges[0].node.action
  console.log(action)

  return action ? (
    <>
      <Box style={{ padding: `50px` }}>
        <PageHeader title={action.page.subheading} />
        <ActionComponent action={action.action} />
       </Box>
      <Helmet>
        <title>{action.page.subheading}</title>
        <meta property="og:url" content={`https://taxtherich.com/actions/${slug}`} />
        <meta property="og:type" content={`article`} />
        <meta property="og:title" content={action.page.heading} />
        <meta property="og:description" content={action.page.subheading} />
        <meta property="og:image" content={action.page.featuredImage && action.page.featuredImage.guid} />
        <meta name="description" content={action.page.subheading} />
      </Helmet>
    </>
  ) : <Loading />
}

export default Action