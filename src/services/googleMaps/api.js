import { __GOOGLEAPI__ as url } from 'config'

export default () => import('services/api')
  .then((axios) => axios.create({
    url,
  }))
