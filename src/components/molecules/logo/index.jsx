import Image from 'atoms/image'
import PropTypes from 'prop-types'
import React from 'react'

const Logo = ({ height, ...props }) => (
  <Image
    {...props}
    height={height}
    // eslint-disable-next-line max-len
    src="https://courier-images-web.imgix.net/static/img/white-logo.png?auto=compress,format&amp;fit=max&amp;w=undefined&amp;h=undefined&amp;dpr=2&amp;fm=png"
    alt="Zé delivery logo"
  />
)

Logo.propTypes = {
  height: PropTypes.number,
}

Logo.defaultProps = {
  height: 40,
}

export default Logo
