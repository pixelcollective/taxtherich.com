// @react
import React from 'react'

// @rebass
import { Box, Text } from 'rebass'

// antd
import { Layout, Menu, Breadcrumb } from 'antd'

// components
import TopBar  from './../components/TopBar'
import Header  from './../components/Header'
import Footer  from './../components/Footer'
import Action  from './../components/Action'
import Actions from './../components/Actions'

const Home = ({actions, primary}) => (
  <>
    {/* <TopBar
      heading={`Tax the Rich`}
      subheading={`It's time to finally pay your share.`}
      background={`#F4F4F4`}
      color={`#333333`}
    /> */}
    <Box mx={[5]}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </Box>
    <Action action={primary} />
    <Header
      heading={`The worst of the worst.`}
      subheading={`While the rest of America toils to meet their tax obligations, the richest of the rich sometimes don't even pay a dime. Send them and your legislators a personalized message letting them know what you think of that.`}
      background={`#F4F4F4`}
      color={`#333333`} />
    <Actions actions={actions} />
    <Footer
      heading={`Tax the Rich`}
      background={`#F4F4F4`}
      color={`#333333`} />
  </>
)

export default Home