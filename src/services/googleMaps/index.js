import { __GOOGLEKEY__ } from 'config'

import errorHandler from './errorHandler'
import mapper from './mapper'

const get = async (address) => {
  const api = await import('./api')
  const getter = await import('./getter')

  return getter(api(), { key: __GOOGLEKEY__, address })
}

export {
  errorHandler,
  get,
  mapper,
}
