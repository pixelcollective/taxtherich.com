// @react
import React from 'react'

// @redux
import { Provider as Redux } from 'react-redux'
import store from './store'

// @react-router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// @styled-components
import { ThemeProvider } from 'styled-components'

// @apollo
import {
  GraphQLProvider,
  data
} from './graph'

import theme from './theme'

// @antd
import { Layout } from 'antd'

// @app/components
import AppTop from './components/AppTop'
import Footer from './components/Footer'

// @app/views
import Home from './pages/Home'
import Actions from './pages/Actions'
import TakeAction from './pages/TakeAction'
import Villains from './pages/Villains'
import Villain from './pages/Villain'
import Page from './pages/Page'

// @app/styles
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

/**
 * Exports
 */
const App = () => (
  <Redux store={store}>
    <GraphQLProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout className="layout">
            <AppTop actions={data.menu} />
            <Switch>
              <Route path={`/villains/:slug`} component={Villain} />
              <Route path={`/take-action`}>
                <TakeAction actions={data.takeAction} />
              </Route>
              <Route path={`/actions`}>
                <Actions actions={``} />
              </Route>
              <Route path={`/villains`}>
                <Villains actions={data.home} />
              </Route>
              <Route path={`/:slug`} component={Page} />
              <Route path={'/'}>
                <Home actions={data.home} />
              </Route>
            </Switch>
            <Footer
              heading={`Tax the Rich`}
              background={`#F4F4F4`}
              color={`#333333`} />
          </Layout>
        </Router>
      </ThemeProvider>
    </GraphQLProvider>
  </Redux>
)

export default App
