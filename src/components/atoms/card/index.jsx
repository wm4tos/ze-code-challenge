import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const Card = ({ children, ...props }) => (
  <div css={styles.cardBaseStyle} {...props}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
}

export default Card
