import Icon from 'atoms/icon'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const PhoneLink = ({ iconName, phoneNumber }) => (
  <div css={styles.containerBaseStyle}>
    <Icon name={iconName} />
    <span>{phoneNumber}</span>
  </div>
)

PhoneLink.propTypes = {
  iconName: PropTypes.string,
  phoneNumber: PropTypes.string.isRequired,
}

PhoneLink.defaultProps = {
  iconName: 'AiOutlinePhone',
}

export default PhoneLink
