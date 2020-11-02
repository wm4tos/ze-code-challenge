import { css } from '@emotion/core'
import { COLORS, FONT_SIZES } from 'constants/theme'

export const cardStyle = css`
  max-width: 100%;
`

export const titleStyle = css`
  font-size: ${FONT_SIZES.large}pt;
`

export const addressStyle = css`
  font-size: ${FONT_SIZES.small}pt;
  color: ${COLORS.dark_gray};
`
