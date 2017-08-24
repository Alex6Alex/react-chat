import React from 'react'
import { shallow } from 'enzyme'

import SignUp from './SignUp'

describe('SignUp component', () => {
  const component = shallow(<SignUp />)

  it('component', () => {
    expect(component.is('.sign-up')).toBe(true)
  })
})
