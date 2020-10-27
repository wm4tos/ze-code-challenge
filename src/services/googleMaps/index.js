import { __GOOGLEKEY__ } from 'config'

import api from './api'
import errorHandler from './errorHandler'
import getter from './getter'
import mapper from './mapper'

const get = async (address) => getter(api(), { key: __GOOGLEKEY__, address })

export {
  errorHandler,
  get,
  mapper,
}
