import PropTypes from 'prop-types'
import React from 'react'
import { getProp } from 'services/utils/mapper'

import * as styles from './styles'

const List = ({
  items, keyProp, Component, itemStyle, itemMapper, containerStyle,
}) => (
  <ul css={[styles.listBaseStyle, containerStyle]}>
    {items.map(itemMapper).map((item) => (
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
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  itemMapper: PropTypes.func,
}

List.defaultProps = {
  itemStyle: {},
  itemMapper: (obj) => obj,
  containerStyle: {},
}

export default List
