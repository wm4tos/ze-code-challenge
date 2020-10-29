import { css } from '@emotion/core'

export const getListBaseStyle = (justify) => css`
  list-style-type: none;
  display: flex;
  justify-content: ${justify};
  padding: 0;
  margin: 0;
`
