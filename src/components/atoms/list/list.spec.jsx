import { render } from '@testing-library/react'
import React from 'react'

import List from './index'

describe('<List />', () => {
  const FakeComponent = (labelProp) => {
    const Component = ({ [labelProp]: label }) => (
      <div>{label}</div>
    )

    return Component
  }

  let data

  beforeEach(() => {
    data = [
      { key: 0, label: 'Random label 0' },
      { key: 1, label: 'Random label 1' },
    ]
  })

  it('should render expected list', async () => {
    const Component = FakeComponent('label')

    const { baseElement } = render(<List Component={Component} items={data} />)

    data.forEach(({ label }) => {
      expect(baseElement).toHaveTextContent(label)
    })
  })

  it('should map to change label prop', async () => {
    const Component = FakeComponent('text')

    const { baseElement } = render(
      <List
        Component={Component}
        items={data}
        itemMapper={({ label: text, key }) => ({ text, key })}
      />,
    )

    data.forEach(({ label }) => {
      expect(baseElement).toHaveTextContent(label)
    })
  })

  it('should map to change key prop', async () => {
    const Component = FakeComponent('label')

    const { baseElement } = render(
      <List
        keyProp="id"
        Component={Component}
        items={data}
        itemMapper={({ label, key: id }) => ({ label, id })}
      />,
    )

    data.forEach(({ label }) => {
      expect(baseElement).toHaveTextContent(label)
    })
  })
})
