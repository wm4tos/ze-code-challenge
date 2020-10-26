import { COLORS } from 'constants/theme'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { toPascalCase } from 'services/utils/string'

import * as styles from './styles'

const Icon = ({ name, size, color }) => {
  const [icon, setIcon] = useState(() => <div />)

  useEffect(() => {
    const iconName = toPascalCase(name)
    const [group] = name.match(/^\w./)

    const lowerCaseGroup = group.toLowerCase()

    const getter = module => {
      const Icon = module[iconName]

      return <Icon size={size} css={styles.changeColor(color)} />
    }

    import(`react-icons/${lowerCaseGroup}/index.js`).then(getter).then(setIcon)
  }, [name])

  return <LazyLoad height={size}>{icon}</LazyLoad>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  size: 16,
  color: COLORS.black
}

export default Icon
