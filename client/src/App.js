// react
import React from 'react'

// @apollo
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

// @emotion, @rebass
import { ThemeProvider } from 'emotion-theming'
import theme from './theme'

// components
import { Action } from './Action'

// stylesheet
import './global.css'

/**
 * Initialize gql apollo connection
 */
const client = new ApolloClient({
  uri: 'http://taxtherich.valet/graphql',
})

/**
 * Exports
 */
const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Action />
    </ThemeProvider>
  </ApolloProvider>
)

export default App
