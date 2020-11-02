import { COLORS } from 'constants/theme'
import React from 'react'
import ReactLoading from 'react-loading'

import * as styles from './styles'

const Loading = () => (
  <div css={styles.container}>
    <ReactLoading color={COLORS.yellow} type="spin" />
    <div css={styles.text}>Aguarde um momento</div>
  </div>
)

export default Loading
