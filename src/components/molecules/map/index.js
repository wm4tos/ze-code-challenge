import { __GOOGLEKEY__ as apiKey } from 'config'
import { GoogleApiWrapper, Map } from 'google-maps-react'
import React from 'react'

const MapContainer = (props) => <Map {...props} />

export default GoogleApiWrapper({
  apiKey,
})(MapContainer)
