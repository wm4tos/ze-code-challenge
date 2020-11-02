import { css } from '@emotion/core'
import { SCREEN_SIZES } from 'constants/theme'
import facepaint from 'facepaint'

const mediaQueries = facepaint([`@media (min-width: ${SCREEN_SIZES.phones - SCREEN_SIZES.minimum_width}px)`])

export const itemStyle = css`
  ${mediaQueries({
    width: ['100%', '182px'],
  })}
`
