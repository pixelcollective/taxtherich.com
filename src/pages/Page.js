// @react
import React from 'react'

// @react-helmet
import { Helmet } from 'react-helmet'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'

// @rebass
import { Box } from 'rebass'

// @antd
import { PageHeader, Breadcrumb, Layout, Typography, Divider } from 'antd'

// @wordpress/data
const { Content, Header } = Layout
const { Title } = Typography

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

  const pages = data && data.pages && data.pages.nodes

  return pages ? pages.map((
    {title, content, excerpt, featuredImage},
    id
  ) => (
    <div style={{marginTop: 0, paddingTop: 0}} key={id}>
      <Header style={{
        backgroundImage: `url(${featuredImage.guid})`,
        minHeight: `40vh`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}>
        <Breadcrumb style={{
          margin: `0 0 16px 0`,
          paddingTop: `16px`,
        }}>
          <Breadcrumb.Item>
            <Link to={`/`}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content style={{ padding: `0 50px` }}>
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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="og:image" content={featuredImage.guid} />
      </Helmet>
    </div>
  )) : null
}

export default Page