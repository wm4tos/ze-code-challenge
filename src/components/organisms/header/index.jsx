import Input from 'atoms/input'
import Logo from 'molecules/logo'
import Nav from 'organisms/nav'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './styles'

const Header = ({
  containerStyle, contentStyle, value, onChange,
}) => {
  const inputId = 'header-input'

  return (
    <header css={[styles.headerBase, containerStyle]}>
      <div css={[styles.content, contentStyle]}>
        <Logo containerStyle={styles.logoContainerStyle} />
        <Input
          name={inputId}
          dataTestId={inputId}
          id={inputId}
          placeholder="Inserir endereço"
          containerStyle={styles.inputContainerStyle}
          value={value}
          onChange={onChange}
        />
        <Nav containerStyle={styles.githubCentralContainerStyle} />
      </div>
    </header>
  )
}

Header.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

Header.defaultProps = {
  containerStyle: {},
  contentStyle: {},
}

export default Header
