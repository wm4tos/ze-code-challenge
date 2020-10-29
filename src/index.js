import 'normalize.css'

import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { client } from 'services/graphql'

import store from './store'
import App from './App'

const renderApp = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
)

ReactDOM.render(renderApp(), document.getElementById('root'))
