import { css } from '@emotion/core'
import {
  COLORS, GRID, MARGIN_PADDING, SCREEN_SIZES,
} from 'constants/theme'
import facepaint from 'facepaint'

const mediaQueries = facepaint([`@media (min-width: ${SCREEN_SIZES.tablets - SCREEN_SIZES.minimum_width}px)`])

export const headerBase = css`
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  position: fixed;
  box-sizing: content-box;
  background-color: ${COLORS.black_menu};
  padding: ${MARGIN_PADDING.extra_large}px 0;
`

export const content = css`
  width: 100%;
  grid-template-columns: ${GRID.columns};
  grid-gap: ${GRID.gap}px;
  align-items: center;
  grid-template-areas: "logo input input github";
  justify-items: center;
  ${mediaQueries({
    margin: [`0 ${MARGIN_PADDING.large}px`, 0],
    display: ['flex', 'grid'],
    flexDirection: ['column'],
  })}
`

export const inputContainerStyle = css`
  grid-area: input;
`

export const logoContainerStyle = css`
  justify-self: center;
  grid-area: logo;
`

export const githubCentralContainerStyle = css`
  grid-area: github;
`
