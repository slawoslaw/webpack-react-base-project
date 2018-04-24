import React from 'react'
import {shallow} from 'enzyme'

import {Main} from '../../../src/components/layout'

describe('Main', () => {
  it('should be defined', () => {
    expect(Main).toBeDefined()
  })

  it('should be rendered', () => {
    const main = shallow(<Main />)
    expect(main.find('.main')).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const main = shallow(
      <Main>
        <div className="child" />
      </Main>
    )
    expect(main.contains(<div className="child" />)).toEqual(true)
  })
})
