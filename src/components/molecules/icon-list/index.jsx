import IconTooltip from 'molecules/icon-tooltip'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const IconList = ({ items, alignment }) => (
  <ul css={styles.getListBaseStyle(alignment)}>
    {items.map((item) => (
      <li key={item.key}>
        <IconTooltip iconName={item.icon} text={item.label} position="top middle" />
      </li>
    ))}
  </ul>
)

IconList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })).isRequired,
  alignment: PropTypes.string,
}

IconList.defaultProps = {
  alignment: 'space-between',
}

export default IconList
