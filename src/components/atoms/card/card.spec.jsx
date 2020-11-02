import { render } from '@testing-library/react'
import React from 'react'

import Card from './index'

describe('<Card />', () => {
  let expected

  beforeEach(() => {
    expected = <div>Random data</div>
  })

  it('should render expected data', () => {
    const { baseElement } = render(<Card>{expected}</Card>)

    expect(baseElement).toBeInTheDocument(expected)
  })
})
