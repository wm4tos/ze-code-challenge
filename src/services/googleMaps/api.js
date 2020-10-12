import { __GOOGLEAPI__ } from 'config'

const url = __GOOGLEAPI__

export default () => import('services/api')
  .then((axios) => axios.create({
    url,
  }))
