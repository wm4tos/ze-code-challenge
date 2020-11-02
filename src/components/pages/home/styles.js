import { css } from '@emotion/core'
import { GRID, MARGIN_PADDING, SCREEN_SIZES } from 'constants/theme'
import facepaint from 'facepaint'

const mediaQueries = facepaint([
  `@media (min-width: ${SCREEN_SIZES.phones - SCREEN_SIZES.minimum_width}px)`,
  `@media (min-width: ${SCREEN_SIZES.tablets - SCREEN_SIZES.minimum_width}px)`])

export const containerBaseStyle = css`
  grid-template-areas: "content content content";
  grid-template-columns: ${GRID.columns};
  grid-gap: ${GRID.gap}px;
  display: grid;
`

export const contentStyle = css`
  grid-area: content;
  justify-content: center;
  display: flex;
  ${mediaQueries({
    margin: [`0 ${MARGIN_PADDING.large}px`, `0 ${MARGIN_PADDING.large}px`, `0 ${MARGIN_PADDING.extra_large * 2}px`],
    justifyContent: ['center', 'flex-start'],
  })}
`
