import { ApolloClient, InMemoryCache } from '@apollo/client'
import { APOLLO_URI as uri } from 'config'

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
})

export default client
