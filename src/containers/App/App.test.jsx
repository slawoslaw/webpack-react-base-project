import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

describe('App', () => {
  it('should be defined', () => {
    expect(App).toBeDefined()
  })

  it('should be rendered', () => {
    const app = shallow(<App />)
    expect(app.find('.app')).toHaveLength(1)
  })
})
