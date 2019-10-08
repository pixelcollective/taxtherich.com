// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams } from 'react-router'

// @react-helmet
import { Helmet } from 'react-helmet'

// @rebass
import { Box } from 'rebass'

// @antd
import {
  Typography,
  Divider
} from 'antd'

// @app/components
import PageHeader from './../components/header/PageHeader'

/**
 * Exports component
 */
const Page = () => {
  let { slug } = useParams()
  const { data } = useQuery(gql`
    {
      pages (where: {name: "${slug}"}) {
        nodes {
          title
          content
          slug
          featuredImage {
            guid
            sourceUrl
          }
        }
      }
    }
  `)

  return data && data.pages && data.pages.nodes ? data.pages.nodes.map(({
    title,
    content,
    featuredImage,
  }, id) => (
    <Box key={id} style={{ padding: `50px` }}>
      <PageHeader title={title} image={featuredImage.guid} />
      <Typography>
        <Box dangerouslySetInnerHTML={{__html: content}} />
        <Divider />
      </Typography>
      <Helmet>
        <title>Tax The Rich</title>
        <meta property="og:url" content={`https://taxtherich.com/${slug}`} />
        <meta property="og:type" content={`article`} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={featuredImage.guid} />
      </Helmet>
    </Box>
  )) : null
}

export default Page