import React from 'react'
import { shallow } from 'enzyme'

import StartPage from './StartPage'

describe('SignUp component', () => {
  const component = shallow(<StartPage />)

  it('component', () => {
    expect(component.is('.start-page')).toBe(true)
  })

  it('greeting block', () => {
    expect(component.find('.greeting').exists()).toBe(true)
  })

  it('greeting text', () => {
    expect(component.find('.greeting-text').text()).toEqual('Приветствуем Вас в нашем чате')
  })

  it('help text', () => {
    expect(component.find('.note').text()).toEqual('Для продолжения войдите или зарегистрируйтесь')
  })

  it('block with authentication', () => {
    expect(component.find('.auth-block').exists()).toBe(true)
  })

  it('sign-in', () => {
    expect(component.find('.sign-in-block').exists()).toBe(true)
  })

  it('sign-up', () => {
    expect(component.find('.sign-up-block').exists()).toBe(true)
  })
})
