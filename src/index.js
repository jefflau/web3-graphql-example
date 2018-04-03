import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './api/resolvers'
import typeDefs from './api/schema'
import { ApolloProvider } from 'react-apollo'

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({
  schema,
  mocks: resolvers
})

const apolloCache = new InMemoryCache(window.__APOLLO_STATE__)

const graphqlClient = new ApolloClient({
  cache: apolloCache,
  link: new SchemaLink({ schema })
})

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
