import { css } from '@emotion/core'
import { BOX_SHADOW, COLORS, MARGIN_PADDING } from 'constants/theme'

export const cardBaseStyle = css`
  border-radius: 8px;
  background-color: ${COLORS.white};
  box-shadow: ${BOX_SHADOW.extra_small} ${COLORS.light_shadow};
  padding: ${MARGIN_PADDING.medium}px;
`
