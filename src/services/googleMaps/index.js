import { __GOOGLEKEY__ } from 'config'

import errorHandler from './errorHandler'
import mapper from './mapper'

const get = async (address) => {
  const [api, getter] = await Promise.all([import('./api'), import('./getter')])

  return getter(api(), { key: __GOOGLEKEY__, address })
}

export {
  errorHandler,
  get,
  mapper,
}
