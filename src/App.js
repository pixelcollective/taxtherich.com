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
  Link
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
import {
  Layout,
  Menu,
  Icon
} from 'antd'

// @app/components
import Footer from './components/Footer'

// @app/views
import Home from './pages/Home'
import TakeAction from './pages/TakeAction'
import Villains from './pages/Villains'
import Page from './pages/Page'

// @app/styles
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// destructuring
const { Header } = Layout

/**
 * Exports
 */
const App = () => (
  <Redux store={store}>
    <GraphQLProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout className="layout">
            <Header style={{ zIndex: 101 }}>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{
                  lineHeight: `64px`,
                  color: `white`,
                  textTransform: `uppercase`,
                  letterSpacing: `0.2ch`,
                  fontWeight: 700
                }}>
                <Menu.Item key="0">
                  <Link to={`/`}><Icon type="notification" /> Tax The Rich</Link>
                </Menu.Item>
                <Menu.Item key="1" style={{
                  color: `white`,
                  textTransform: `uppercase`,
                  fontWeight: 300
                }}>
                  <Link to={`/take-action`}>Take Action</Link>
                </Menu.Item>
                <Menu.Item key="2" style={{
                  color: `white`,
                  textTransform: `uppercase`,
                  fontWeight: 300
                }}>
                  <Link to={`/villains`}>Villains</Link>
                </Menu.Item>
                <Menu.Item key="3" style={{
                  color: `white`,
                  textTransform: `uppercase`,
                  fontWeight: 300
                }}>
                  <Link to={`/about`}>About</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Switch>
              <Route path="/take-action">
                <TakeAction actions={data.takeAction} />
              </Route>
              <Route path="/villains">
                <Villains actions={data.home} />
              </Route>
              <Route path="/:slug" component={Page} />
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
