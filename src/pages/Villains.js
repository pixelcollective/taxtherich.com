// @react
import React from 'react'

// @rebass
import { Box } from 'rebass'

// antd
import { Breadcrumb } from 'antd'

// components
import Header from '../components/Header'
import Actions from '../components/Actions'

const Home = ({ actions, primary }) => (
  <>
    <Box mx={[5]}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Villains</Breadcrumb.Item>
      </Breadcrumb>
    </Box>
    <Header
      heading={`The worst of the worst.`}
      subheading={`While the rest of America toils to meet their tax obligations, the richest of the rich sometimes don't even pay a dime. Send them and your legislators a personalized message letting them know what you think of that.`}
      background={`#F4F4F4`}
      color={`#333333`} />
    <Actions actions={actions} />
  </>
)

export default Home