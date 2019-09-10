// react
import React from 'react'

import { ThemeProvider } from 'emotion-theming'

// configurations
import { GraphQLProvider, data } from './graph'
import theme from './theme'

// components
import Actions from './pages/actions'

// stylesheet
import './global.css'

/**
 * Exports
 */
const App = () => (
  <GraphQLProvider>
    <ThemeProvider theme={theme}>
      <Actions actions={data.actions} />
    </ThemeProvider>
  </GraphQLProvider>
)

export default App
