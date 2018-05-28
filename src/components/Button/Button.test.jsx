import React from 'react'
import {shallow} from 'enzyme'

import Button from './Button'

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('should be rendered with title', () => {
    const button = shallow(<Button title="test" />)
    expect(button.text()).toEqual('test')
  })
})
