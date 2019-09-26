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

// antd
import { Layout, Menu, Breadcrumb } from 'antd'

// components
import Home from './pages/home'

// stylesheet
import './global.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// destructuring
const { Header , Content} = Layout

/**
 * Exports
 */
const App = () => (
  <Redux store={store}>
    <GraphQLProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header style={{ position: `fixed`, zIndex: 101, width: `100%` }}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="0" style={{color: `white`, textTransform: `uppercase`, letterSpacing: `0.2ch`, fontWeight: 700}}>Tax The Rich</Menu.Item>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{marginTop: `64px`}}>
            <Home actions={data.actions} />
          </Content>
        </Layout>
      </ThemeProvider>
    </GraphQLProvider>
  </Redux>
)

export default App
