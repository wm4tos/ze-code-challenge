import IconTooltip from 'molecules/icon-tooltip'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const DeliveryTypes = ({ types }) => (
  <ul css={styles.listBaseStyle}>
    {types.map((type) => (
      <li key={type.deliveryTypeId}>
        <IconTooltip iconName={type.icon} text={type.label} position="top middle" />
      </li>
    ))}
  </ul>
)

DeliveryTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
}

export default DeliveryTypes
