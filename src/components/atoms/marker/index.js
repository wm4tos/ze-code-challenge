import { Marker } from 'google-maps-react'
import PropTypes from 'prop-types'
import React from 'react'

const MarkerContainer = (props) => <Marker {...props} />

MarkerContainer.propTypes = {
  mapCenter: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    noWrap: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func,
  onMouseover: PropTypes.func,
}

MarkerContainer.defaultProps = {
  onClick: () => null,
  onMouseover: () => null,
}

export default MarkerContainer
