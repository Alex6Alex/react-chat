import React from 'react'
import { shallow } from 'enzyme'

import DatePicker from './DatePicker'

describe('компонент DatePicker', () => {
  const component = shallow(<DatePicker/>)

  it('компонент', () => {
    expect(component.is('.dat1e-picker')).toBe(true)
  })

  it('есть заголовок компонента', () => {
    expect(component.find('.date-title').length).toBe(1)
  })

  it('есть header', () => {
    expect(component.find('.date-header').length).toBe(1)
  })

  it('есть блок контента', () => {
    expect(component.find('.date-content').length).toBe(1)
  })
})
