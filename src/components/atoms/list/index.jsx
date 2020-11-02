import PropTypes from 'prop-types'
import React from 'react'
import { getProp } from 'services/utils/mapper'

import * as styles from './styles'

const List = ({
  items, keyProp, Component, itemStyle,
}) => (
  <ul css={styles.listBaseStyle}>
    {items.map((item) => (
      <li css={itemStyle} key={getProp(item)(keyProp)}>
        <Component {...item} />
      </li>
    ))}
  </ul>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]).isRequired,
  keyProp: PropTypes.string.isRequired,
  itemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

List.defaultProps = {
  itemStyle: {},
}

export default List
