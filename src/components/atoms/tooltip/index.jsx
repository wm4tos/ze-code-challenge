import PropTypes from 'prop-types'
import React from 'react'
import Popup from 'reactjs-popup'

import * as styles from './styles'

import('reactjs-popup/dist/index.css')

const Tooltip = ({
  trigger, position, children, on,
}) => (
  <Popup
    contentStyle={styles.contentStyle}
    on={on}
    trigger={(
      <button css={styles.buttonStyle} type="button">
        {trigger}
      </button>
    )}
    position={position}
  >
    <div>{children}</div>
  </Popup>
)

Tooltip.propTypes = {
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  position: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  on: PropTypes.string,
}

Tooltip.defaultProps = {
  position: 'bottom middle',
  on: 'hover',
}

export default Tooltip
