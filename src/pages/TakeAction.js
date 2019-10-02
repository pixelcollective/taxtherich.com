// @react
import React from 'react'

// @rebass
import { Box } from 'rebass'

// antd
import { Breadcrumb } from 'antd'

// components
import Action from '../components/Action'

const TakeAction = ({ actions, primary }) => (
  <>
    <Box mx={[5]}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Take Action</Breadcrumb.Item>
      </Breadcrumb>
    </Box>
    <Action action={primary} />
  </>
)

export default TakeAction