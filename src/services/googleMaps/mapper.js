export default ({ data, status }) => {
  if (!/^OK$/.test(status)) throw new Error(status)

  return data.results[0]
}

export const getLatLong = (data) => data.geometry.location
