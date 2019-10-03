// @react
import React from 'react'

// @rebass
import { Box } from 'rebass'

// antd
import { Breadcrumb } from 'antd'

// components
import SingleAction from '../components/action/SingleAction'

const TakeAction = ({ primary }) => (
  <>
    <Box mx={[5]}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Take Action</Breadcrumb.Item>
      </Breadcrumb>
    </Box>
    <SingleAction action={primary} />
  </>
)

export default TakeAction