export default (api, { key, address }) => api.get('/', {
  params: {
    address,
    key,
  },
})
