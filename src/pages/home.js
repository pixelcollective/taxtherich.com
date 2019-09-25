// @react
import React from 'react'

// components
import Action from './../components/Action'
import Actions from '../components/Actions'

const Home = ({actions, primary}) => (
  <>
    <Action action={primary} />
    <Actions actions={actions} />
  </>
)

export default Home