import React from 'react'
import { shallow } from 'enzyme'

import SideBar from './SideBar'

describe('SideBar компонент', () => {
  const component = shallow(<SideBar />);

  it('компонент', () => {
    expect(component.is('.side-bar')).toBe(true)
  });

  it('отображение заголовка меню', () => {
    expect(component.find('#menu').length).toBe(1)
  });

  it('отображение ссылок', () => {
    expect(component.find('.link-img').length).toBe(3)
  })

  // test('Переход по ссылке /chat', () => {
  //   const res = component.find('.home').simulate('click')
  //   console.log(res)
  // })
});
