import { Creators } from 'ducks/address'
import Header from 'organisms/header'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as styles from './styles'

const MainTemplate = () => {
  const address = useSelector((state) => state.address)

  const dispatch = useDispatch()

  const handleChange = (v) => dispatch(Creators.setAddress(v))

  return (
    <div css={styles.containerBaseStyle}>
      <Header onChange={handleChange} value={address} />
    </div>
  )
}

export default MainTemplate
