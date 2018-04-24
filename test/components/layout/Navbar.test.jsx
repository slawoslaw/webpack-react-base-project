import React from 'react'
import {shallow} from 'enzyme'

import {Navbar} from '../../../src/components/layout'

describe('Navbar', () => {
  it('should be defined', () => {
    expect(Navbar).toBeDefined()
  })

  it('should be rendered', () => {
    const navbar = shallow(<Navbar />)
    expect(navbar.find('.navbar')).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const navbar = shallow(
      <Navbar>
        <div className="child" />
      </Navbar>
    )
    expect(navbar.contains(<div className="child" />)).toEqual(true)
  })
})
