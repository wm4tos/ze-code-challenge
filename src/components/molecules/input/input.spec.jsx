import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Input from './index'

describe('<Input />', () => {
  let handleChange
  const name = 'input'

  beforeEach(() => {
    handleChange = jest.fn()
  })

  afterEach(jest.clearAllMocks)

  it('should return a input with placeholder', () => {
    const expected = 'Placeholder test'

    const { getByPlaceholderText } = render(
      <Input
        id={name}
        dataTestId={name}
        onChange={handleChange}
        value=""
        name={name}
        placeholder={expected}
      />,
    )

    expect(getByPlaceholderText(expected)).toBeInTheDocument()
  })

  it('should receive value', () => {
    const expected = 'Value'

    const { getByTestId } = render(
      <Input
        id={name}
        dataTestId={name}
        onChange={handleChange}
        value={expected}
        name={name}
      />,
    )

    expect(getByTestId(name)).toHaveValue(expected)
  })

  it('should change value', () => {
    const expected = '12345'

    const { getByTestId, rerender } = render(
      <Input
        id={name}
        dataTestId={name}
        onChange={handleChange}
        value=""
        name={name}
      />,
    )

    fireEvent.change(getByTestId(name), { target: { value: expected } })

    rerender(
      <Input
        id={name}
        dataTestId={name}
        onChange={handleChange}
        value=""
        name={name}
      />,
    )

    expect(handleChange).toBeCalledWith(expected)
  })
})
