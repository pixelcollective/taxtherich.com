// @react
import React from 'react'

// @react-router
import { Link } from 'react-router-dom'

// @rebass
import { Box, Image, Text } from 'rebass'

// @antd
import { Icon, Row, Col, Card, Button, Divider } from 'antd'

const { Meta } = Card

const Action = ({ action: {slug, action: { page, action}}}) => {
  console.log(slug, page, action)

  return (
    <Row gutter={48}>
      <Col sm={24} md={24}>
        <Card
          title={`Take Action`}
          hoverable
          cover={page.featuredImage ? (
            <Link to={`/actions/${slug}`}>
              <Image alt={action.heading} src={page.featuredImage.guid} />
            </Link>
          ) : null}
          style={{marginBottom: `2rem`}}>
          <Meta title={page.heading} description={
            <Box>
              <Text>{page.subheading}</Text>
              <Divider />
              <Link to={`/actions/${slug}`}><Button type={`primary`}>Take Action <Icon type="right" /></Button></Link>
            </Box>
          } />
        </Card>
      </Col>
    </Row>
  )
}

export default Action