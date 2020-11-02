import List from 'atoms/list'
import IconTooltip from 'molecules/icon-tooltip'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const IconList = ({ items, alignment }) => {
  const mapper = ({ icon: iconName, label: text, ...item }) => ({
    iconName, text, position: 'right middle', ...item,
  })

  return <List items={items} containerStyle={styles.getListBaseStyle(alignment)} Component={IconTooltip} itemMapper={mapper} />
}

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
