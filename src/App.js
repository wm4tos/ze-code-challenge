import { css, Global } from '@emotion/core'
import { FONT_FAMILIES } from 'constants/theme'
import React from 'react'
import Template from 'templates/main'

import Router from './router'

const styles = css`
  body * {
    font-family: ${FONT_FAMILIES.roboto};
  }
`

const App = () => (
  <>
    <Global styles={styles} />
    <Template>
      <Router />
    </Template>
  </>
)

export default App
