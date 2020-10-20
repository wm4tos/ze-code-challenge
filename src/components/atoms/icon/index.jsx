import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'
import { toPascalCase } from 'services/utils/string'

const Icon = ({ name, size }) => {
  const [icon, setIcon] = useState(() => <div />)

  useEffect(() => {
    const iconName = toPascalCase(name)
    const [group] = name.match(/^\w./)

    const getter = module => {
      const Icon = module[iconName]

      return <Icon size={size} />
    }

    import(`react-icons/${group}/index.js`).then(getter).then(setIcon)
  }, [name])

  return <LazyLoad height={size}>{icon}</LazyLoad>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}

Icon.defaultProps = {
  size: 16,
}

export default Icon
