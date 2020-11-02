import { css } from '@emotion/core'
import { COLORS, MARGIN_PADDING } from 'constants/theme'

export const container = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  position: fixed;
  background-color: ${COLORS.dark_shadow};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const text = css`
color: ${COLORS.dark_yellow};
margin-top: ${MARGIN_PADDING.medium}px;
`
