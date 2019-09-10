// react
import React from 'react'

import { ThemeProvider } from 'emotion-theming'

// configurations
import { GraphQLProvider, data } from './graph'
import theme from './theme'

// components
import Header from './components/Header'
import Actions from './pages/actions'

// stylesheet
import './global.css'

/**
 * Exports
 */
const App = () => (
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <Header
        heading={`Tax the Rich`}
        subheading={`It's time to finally pay your share.`}
        background={`#F4F4F4`}
        color={`#333333`} />
      <Actions actions={data.actions} />
    </ThemeProvider>
  </GraphQLProvider>
)

export default App
