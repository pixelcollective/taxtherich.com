import React from 'react'

// @apollo
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://taxtherich.data.tinypixel.dev/graphql',
})

const GraphQLProvider = props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
)

export default GraphQLProvider