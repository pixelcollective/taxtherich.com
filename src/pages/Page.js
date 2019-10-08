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
    </Box>
  )) : null
}

export default Page