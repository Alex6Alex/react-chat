import React from 'react'
import { shallow } from 'enzyme'

import ToSignUp from './ToSignUp'

describe('ToSignUp component', () => {
  const component = shallow(<ToSignUp />);

  it('component', () => {
    expect(component.is('.sign-up')).toBe(true)
  })
})
