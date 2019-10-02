// @react
import React from 'react'

// @react-helmet
import { Helmet } from 'react-helmet'

// components
import Header  from '../components/Header'
import Action  from '../components/Action'
import Actions from '../components/Actions'

const Home = ({actions, primary}) => (
  <>
    <Action action={primary} />
    <Header
      heading={`The worst of the worst.`}
      subheading={`
        While the rest of America toils to meet their tax obligations, the richest of the rich
        sometimes don't even pay a dime. Send them and your legislators a personalized message
        letting them know what you think of that.
      `}
      background={`#F4F4F4`}
      color={`#333333`} />
    <Actions actions={actions} />
    <Helmet>
      <title>The Villainous Rich</title>
      <meta name="description" content={`America's wealthiest citizens don't pay a dime in taxes. No fair!`} />
    </Helmet>
  </>
)

export default Home