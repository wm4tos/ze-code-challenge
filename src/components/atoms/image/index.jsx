import PropTypes from 'prop-types'
import React from 'react'
import LazyLoad from 'react-lazyload'

const Image = ({
  src, alt, caption, height, imageStyle, isLazyLoaded, ...props
}) => {
  const renderImage = () => (
    <figure>
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
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Image.defaultProps = {
  caption: null,
  imageStyle: {},
  isLazyLoaded: false,
  height: 100,
}

export default Image
