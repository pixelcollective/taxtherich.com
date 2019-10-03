// @react
import React from 'react'

// @rebass
import { Box } from 'rebass'

// components
import PageHeader from '../components/header/PageHeader'
import SingleAction from '../components/action/SingleAction'

const TakeAction = ({ primary }) => (
  <Box style={{ padding: `50px` }}>
    <PageHeader
      title={`Tax The Rich`}
      disabledBack={true}
      excerpt={`We have reached a point where over 70% of Americans now believe that the economy is rigged against them.`} />
    <SingleAction action={primary} />
  </Box>
)

export default TakeAction