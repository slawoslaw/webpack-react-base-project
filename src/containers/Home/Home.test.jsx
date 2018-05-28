import React from 'react'
import {shallow} from 'enzyme'

import Home from './Home'

describe('Home', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined()
  })

  it('should be rendered', () => {
    const home = shallow(<Home />)
    expect(home.find('.home')).toHaveLength(1)
  })
})
