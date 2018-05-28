import React from 'react'
import {shallow} from 'enzyme'

import Navbar from './Navbar'

describe('Navbar', () => {
  it('should be defined', () => {
    expect(Navbar).toBeDefined()
  })

  it('should be rendered', () => {
    const navbar = shallow(<Navbar />)
    expect(navbar.find('.navbar')).toHaveLength(1)
  })
})
