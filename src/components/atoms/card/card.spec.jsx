import { css } from '@emotion/core'
import { render } from '@testing-library/react'
import React from 'react'

import Card from './index'

describe('<Card />', () => {
  let expected
  let dataText

  beforeEach(() => {
    dataText = 'Random data'
    expected = <div>{dataText}</div>
  })

  it('should render expected data', () => {
    const { baseElement } = render(<Card>{expected}</Card>)

    expect(baseElement).toBeInTheDocument(expected)
  })

  it('should render expected data', () => {
    const expectedStyle = `
      background-color: black;
    `
    const { getByText } = render(<Card containerStyle={css`${expectedStyle}`}>{expected}</Card>)

    expect(getByText(dataText).parentElement).toHaveStyle(expectedStyle)
  })
})
