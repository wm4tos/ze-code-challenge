/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React from 'react'

import * as style from './styles'

const Input = ({
  id,
  name,
  value,
  leftIcon,
  onChange,
  errorStyle,
  placeholder,
  errorMessage,
  autoCapitalize,
  containerStyle,
  rightIcon,
  dataTestId,
  ...props
}) => {
  const hasErrors = errorMessage?.length

  const handleChange = ({ target }) => onChange(target.value)

  return (
    <div css={[style.inputBaseContainer, containerStyle]}>
      {leftIcon}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        data-testid={dataTestId}
        css={[hasErrors ? style.inputWithError : style.inputBaseStyle]}
        {...props}
      />
      {rightIcon}
      {hasErrors ? (
        <p css={[style.textErrorMessage]} id={`${id}-error-message`}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string,
  name: PropTypes.string.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

Input.defaultProps = {
  placeholder: '',
  errorMessage: '',
  autoCapitalize: 'none',
  containerStyle: {},
}

export default Input
