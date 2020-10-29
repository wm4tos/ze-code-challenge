import Icon from 'atoms/icon'
import Tooltip from 'atoms/tooltip'
import { COLORS } from 'constants/theme'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const IconTooltip = ({
  iconName, iconSize, text, iconColor, position,
}) => (
  <div css={styles.iconTooltipBaseContainer}>
    <Tooltip position={position} trigger={<Icon color={iconColor} name={iconName} size={iconSize} />}>
      {text}
    </Tooltip>
  </div>
)

IconTooltip.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  text: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  position: PropTypes.string,
}

IconTooltip.defaultProps = {
  iconSize: 16,
  iconColor: COLORS.black,
  position: 'bottom middle',
}

export default IconTooltip
