// react
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'emotion-theming'

// configurations
import graph from './graph'
import theme from './theme'

// components
import { ActionLayout} from './layouts/ActionLayout'

// stylesheet
import './global.css'

/**
 * Exports
 */
const App = () => (
  <ApolloProvider client={graph.client}>
    <ThemeProvider theme={theme}>
      <ActionLayout gql={graph.query.action} />
    </ThemeProvider>
  </ApolloProvider>
)

export default App
