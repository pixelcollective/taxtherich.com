// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'

// @rebass
import { Box, Image} from 'rebass'

// @antd
import {
  PageHeader,
  Breadcrumb,
  Layout,
  Typography,
  Divider
} from 'antd'
const { Content, Header } = Layout

/**
 * Exports component
 */
const Page = () => {
  let { slug } = useParams()
  let history = useHistory()
  const { data } = useQuery(gql`
    {
      pages (where: {name: "${slug}"}) {
        nodes {
          title
          content
          excerpt
          featuredImage {
            guid
            sourceUrl
          }
        }
      }
    }
  `)

  return data && data.pages && data.pages.nodes
    ? data.pages.nodes.map(({
      title,
      content,
      excerpt,
      featuredImage,
    }, id) => (
      <Box key={id}>
        <Header style={{
          minHeight: `20vh`,
          minWidth: `100%`,
          width: `100%`,
          position: `relative`,
          overflow: `hidden`,
        }}>
          <Image
            src={featuredImage.guid}
            w={[`100%`]}
            style={{
              objectFit: `cover`,
              width: `100vw`,
              position: `absolute`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }} />
        </Header>
        <Content style={{ padding: `50px` }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={`/`}>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
          <PageHeader
            onBack={() => history.push('/')}
            style={{ paddingLeft: 0, paddingRight: 0 }}
            title={title}
            subTitle={<Box dangerouslySetInnerHTML={{ __html: excerpt }} />} />
          <Typography>
            <Box dangerouslySetInnerHTML={{__html: content}} />
            <Divider />
          </Typography>
        </Content>
      </Box>
    )
  ) : null
}

export default Page