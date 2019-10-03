// @react
import React from 'react'

// @apollo
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// @react-router
import { Link } from 'react-router-dom'

// @antd
import { Menu, Icon, Layout } from 'antd'

// @wordpress/data
const { Header } = Layout

const AppTop = () => {
  const { data } = useQuery(gql`
    {
      menus(where: {location: PRIMARY_NAVIGATION}) {
        nodes {
          menuItems {
            nodes {
              url
              title
              label
              description
            }
          }
        }
      }
    }
  `)

  const gqlUrl = `https://taxtherich.data.tinypixel.dev/`
  const menuItems = data && data.menus && data.menus.nodes[0].menuItems.nodes

  return (
    <Header style={{ zIndex: 101 }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`0`]}
        style={{
          lineHeight: `64px`,
          color: `white`,
          textTransform: `uppercase`,
          letterSpacing: `0.2ch`,
          fontWeight: 700
        }}>
        <Menu.Item key={`0`} >
          <Link to={`/`}>
            <Icon type="notification" /> Tax The Rich
          </Link>
        </Menu.Item>
        {menuItems && menuItems.map(({label, url, id}) => (
          <Menu.Item key={id}>
            <Link to={url.replace(gqlUrl, ``)}>
              {label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  )
}

export default AppTop