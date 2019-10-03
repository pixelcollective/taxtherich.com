// @react
import React from 'react'

// @react-helmet
import { Helmet } from 'react-helmet'

// @rebass
import { Box } from 'rebass'

// @app/components
import PageHeader from '../components/header/PageHeader'
import SingleAction  from '../components/action/SingleAction'
import Villains from '../components/villain/Villains'

/**
 * Page: Home
 */
const Home = ({actions, primary}) => (
  <Box style={{ padding: `50px` }}>
    <PageHeader
      title={`Tax The Rich`}
      disabledBack={true}
      excerpt={`We have reached a point where over 70% of Americans now believe that the economy is rigged against them.`} />
    <SingleAction action={primary} />
    <Villains villains={actions} />
    <Helmet>
      <title>The Villainous Rich</title>
      <meta name="description" content={`America's wealthiest citizens don't pay a dime in taxes. No fair!`} />
    </Helmet>
  </Box>
)

export default Home