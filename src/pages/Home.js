// @react
import React from 'react'

// @react-helmet
import { Helmet } from 'react-helmet'

// components
import Header  from '../components/Header'
import SingleAction  from '../components/action/SingleAction'
import Villains from '../components/Villains'

const Home = ({actions, primary}) => (
  <>
    <SingleAction action={primary} />
    <Villains villains={actions} />
    <Helmet>
      <title>The Villainous Rich</title>
      <meta name="description" content={`America's wealthiest citizens don't pay a dime in taxes. No fair!`} />
    </Helmet>
  </>
)

export default Home