/* eslint-disable react/display-name */
import React from 'react'

export default (Component, keyProp = 'key') => (props) => {
  const { [keyProp]: key } = props

  return <Component {...({ key, ...props })} />
}
