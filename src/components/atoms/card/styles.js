import { css } from '@emotion/core'
import { BOX_SHADOW, COLORS } from 'constants/theme'

export const cardBaseStyle = css`
  border-radius: 8px;
  background-color: ${COLORS.white};
  box-shadow: ${BOX_SHADOW.extra_small} ${COLORS.light_shadow};
`
