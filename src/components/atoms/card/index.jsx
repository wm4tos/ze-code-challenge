import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const Card = ({ children, containerStyle, ...props }) => (
  <div css={[styles.cardBaseStyle, containerStyle]} {...props}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

Card.defaultProps = {
  containerStyle: {},
}

export default Card
