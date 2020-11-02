import { css } from '@emotion/core'

export const getListBaseStyle = (justify) => css`
  display: flex;
  justify-content: ${justify};
`
