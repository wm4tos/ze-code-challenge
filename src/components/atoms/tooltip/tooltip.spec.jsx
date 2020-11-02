import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Tooltip from './index'

describe('<Tooltip />', () => {
  it('should show tooltip on click', () => {
    const testId = 'id'
    const expected = 'Expected text'

    const { getByTestId, baseElement } = render(
      <Tooltip trigger={<div data-testid={testId}>xD</div>} on="click">
        {expected}
      </Tooltip>,
    )

    expect(baseElement).not.toHaveTextContent(expected)

    fireEvent.click(getByTestId(testId))

    expect(baseElement).toHaveTextContent(expected)
  })
})
