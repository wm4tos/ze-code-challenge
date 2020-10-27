/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux'
import { isDevelopment } from 'services/utils/environment'

import reducers from './ducks'

const store = createStore(reducers, isDevelopment() && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
