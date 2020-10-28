import { Creators } from 'ducks/address'
import Header from 'organisms/header'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useDebounce } from 'services/utils/operators'

import * as styles from './styles'

const MainTemplate = () => {
  const [address, setAddress] = useState('')

  const dispatch = useDispatch()

  const debouncedAddress = useDebounce(address, 500)

  useEffect(() => {
    dispatch(Creators.setAddress(debouncedAddress))
  }, [debouncedAddress])

  return (
    <div css={styles.containerBaseStyle}>
      <Header onChange={setAddress} value={address} />
    </div>
  )
}

export default MainTemplate
