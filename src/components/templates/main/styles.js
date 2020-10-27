import { css } from '@emotion/core'
import { SCREEN_SIZES } from 'constants/theme'
import facepaint from 'facepaint'

const mediaQueries = facepaint([
  `@media (max-width: ${SCREEN_SIZES.phones - SCREEN_SIZES.minimum_width}px)`,
  `@media (min-width: ${SCREEN_SIZES.phones}px) and (max-width: ${SCREEN_SIZES.tablets
  - SCREEN_SIZES.minimum_width}px)`,
  `@media (min-width: ${SCREEN_SIZES.tablets}px) and (max-width: ${SCREEN_SIZES.desktops
  - SCREEN_SIZES.minimum_width}px)`,
  `@media (min-width: ${SCREEN_SIZES.desktops}px) and (max-width: ${SCREEN_SIZES.large_desktops}px)`,
])

export const containerBaseStyle = css`
  ${mediaQueries({
    margin: '0 auto',
    maxWidth: [1200, '100%', '100%', '100%', 1200],
    width: '100%',
  })}
`
