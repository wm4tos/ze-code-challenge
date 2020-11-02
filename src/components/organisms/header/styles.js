import { css } from '@emotion/core'
import {
  COLORS, GRID, MARGIN_PADDING, SCREEN_SIZES,
} from 'constants/theme'
import facepaint from 'facepaint'

const mediaQueries = facepaint([`@media (min-width: ${SCREEN_SIZES.tablets - SCREEN_SIZES.minimum_width}px)`])

export const headerBase = css`
  z-index: 10;
  box-sizing: content-box;
  background-color: ${COLORS.black_menu};
  display: flex;
  justify-content: center;
`

export const content = css`
  width: 100%;
  grid-template-columns: ${GRID.columns};
  grid-gap: ${GRID.gap}px;
  align-items: center;
  grid-template-areas: "logo input github";
  justify-items: center;
  ${mediaQueries({
    margin: [`0 ${MARGIN_PADDING.large}px`, `0 ${MARGIN_PADDING.extra_large * 2}px`],
    display: ['flex', 'grid'],
    flexDirection: ['column'],
  })}
`

export const inputContainerStyle = css`
  grid-area: input;
`

export const logoContainerStyle = css`
  justify-self: flex-start;
  grid-area: logo;
`

export const githubCentralContainerStyle = css`
  justify-self: flex-end;
  grid-area: github;
`
