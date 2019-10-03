// @react
import React from 'react'

// @rebass
import { Box } from 'rebass'

// antd
import { Breadcrumb } from 'antd'

// components
import PageHeader from '../components/header/PageHeader'
import Header from '../components/header/VectorHeader'
import Villains from '../components/villain/Villains'

const Home = ({ actions }) => (
  <Box style={{ padding: `50px` }}>
    <PageHeader title={`Villains`} excerpt={`America's richest villains pay the least in taxes.`} />
    <Header
      heading={`The worst of the worst.`}
      subheading={`While the rest of America toils to meet their tax obligations, the richest of the rich sometimes don't even pay a dime. Send them and your legislators a personalized message letting them know what you think of that.`}
      background={`#F4F4F4`}
      color={`#333333`} />
    <Villains villains={actions} />
  </Box>
)

export default Home