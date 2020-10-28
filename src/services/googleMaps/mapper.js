export default ({
  results, status, message, error_message: errorMessage,
}) => {
  if (!/^OK$/.test(status)) throw new Error(message || errorMessage)

  return results[0]
}

export const getLatLong = (data) => data.geometry.location
