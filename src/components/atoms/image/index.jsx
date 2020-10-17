import PropTypes from 'prop-types'
import React from 'react'
import LazyLoad from 'react-lazyload'

import * as styles from './styles'

const Image = ({
  src, alt, caption, height, imageStyle, containerStyle, isLazyLoaded, ...props
}) => {
  const renderImage = () => (
    <figure css={[styles.imageBase, containerStyle]}>
      {<img {...props} height={height} css={imageStyle} src={src} alt={alt} />}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )

  return isLazyLoaded ? <LazyLoad height={height}>{renderImage()}</LazyLoad> : renderImage()
}

Image.propTypes = {
  caption: PropTypes.string,
  isLazyLoaded: PropTypes.bool,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Image.defaultProps = {
  caption: null,
  imageStyle: {},
  isLazyLoaded: false,
  height: 100,
  containerStyle: {},
}

export default Image
