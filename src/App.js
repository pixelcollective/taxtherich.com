// react
import React from 'react'

// redux
import { Provider as Redux } from 'react-redux'
import store from './store'

// @styled-components
import { ThemeProvider } from 'styled-components'

// providers
import { GraphQLProvider, data } from './graph'
import theme from './theme'

// components
import Header from './components/Header'
import Home from './pages/home'

// stylesheet
import './global.css'

/**
 * Exports
 */
const App = () => (
  <Redux store={store}>
    <GraphQLProvider>
      <ThemeProvider theme={theme}>
        <>
          <Header
            heading={`Tax the Rich`}
            subheading={`It's time to finally pay your share.`}
            background={`#F4F4F4`}
            color={`#333333`} />
          <Home actions={data.actions} />
        </>
      </ThemeProvider>
    </GraphQLProvider>
  </Redux>
)

export default App
