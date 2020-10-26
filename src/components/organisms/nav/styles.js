import { css } from '@emotion/core'
import { GRID } from 'constants/theme'

export const baseContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${GRID.gap}px;
`
