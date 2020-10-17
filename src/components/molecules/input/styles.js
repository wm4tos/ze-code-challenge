import { css } from '@emotion/core'
import {
  COLORS, FONT_FAMILIES, FONT_SIZES, LINE_HEIGHTS, MARGIN_PADDING, SCREEN_SIZES,
} from 'constants/theme'
import facepaint from 'facepaint'

const mediaQueries = facepaint([`@media (min-width: ${SCREEN_SIZES.phones - SCREEN_SIZES.minimum_width}px)`])

export const inputBaseContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const inputBaseStyle = css`
  width: 100%;
  height: 48px;
  border-width: 1px;
  border-radius: 8px;
  font-weight: lighter;
  box-sizing: border-box;
  color: ${COLORS.gray};
  background-color: ${COLORS.white};
  font-size: ${FONT_SIZES.medium}px;
  line-height: ${LINE_HEIGHTS.medium}px;
  font-family: ${FONT_FAMILIES.roboto};
  border: 1px solid ${COLORS.c_gray};
  padding-left: ${MARGIN_PADDING.large}px;
  padding-right: ${MARGIN_PADDING.large}px;
  ${mediaQueries({
    margin: ['auto', 'unset'],
  })};

  ::placeholder {
    color: ${COLORS.dark_gray};
    opacity: 1;
    ${mediaQueries({
    fontSize: [`${FONT_SIZES.small}px`, `${FONT_SIZES.medium}px`],
  })};
  }

  :-ms-input-placeholder {
    color: ${COLORS.dark_gray};
  }

  ::-ms-input-placeholder {
    color: ${COLORS.dark_gray};
  }

  :disabled {
    background-color: ${COLORS.off_white};
    color: #cccccc;
  }
`

export const inputWithError = css`
  ${inputBaseStyle};
  border: 1px solid ${COLORS.red};
`

export const textErrorMessage = css`
  text-align: left;
  margin-top: 4px;
  margin-bottom: 0px;
  font-family: ${FONT_FAMILIES.roboto};
  font-size: ${FONT_SIZES.small}px;
  color: ${COLORS.red};
`
