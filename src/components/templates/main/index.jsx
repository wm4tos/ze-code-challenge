import { Creators } from 'ducks/address'
import Header from 'organisms/header'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'services/utils/operators'

import * as styles from './styles'

const MainTemplate = ({ children }) => {
  const [address, setAddress] = useState('')

  const dispatch = useDispatch()

  const debouncedAddress = useDebounce(address, 500)

  useEffect(() => {
    dispatch(Creators.setAddress(debouncedAddress))
  }, [debouncedAddress])

  return (
    <div>
      <Header containerStyle={styles.headerStyle} onChange={setAddress} value={address} />
      <main css={styles.mainBaseStyle}>
        {children}
      </main>
    </div>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.string]).isRequired,
}

export default MainTemplate
