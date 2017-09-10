import React from 'react'
import { shallow } from 'enzyme'

import DatePicker from './DatePicker'

describe('DatePicker component', () => {
  const component = shallow(<DatePicker/>);

  it('component', () => {
    expect(component.is('.date-picker')).toBe(true)
  });

  it('.date-title', () => {
    expect(component.find('.date-title').length).toBe(1)
  });

  it('.date-header', () => {
    expect(component.find('.date-header').length).toBe(1)
  });

  it('.date-content', () => {
    expect(component.find('.date-content').length).toBe(1)
  });

  it('prev month', () => {
    expect(component.find('.month').text()).toEqual('Август');
    component.find('#month-left').simulate('click');
    expect(component.find('.month').text()).toEqual('Июль')
  });

  it('next month', () => {
    component.find('#month-right').simulate('click');
    expect(component.find('.month').text()).toEqual('Август');
    component.find('#month-right').simulate('click');
    expect(component.find('.month').text()).toEqual('Сентябрь')
  });

  it('prev year', () => {
    expect(component.find('.year').text()).toEqual('2017');
    component.find('#year-left').simulate('click');
    expect(component.find('.year').text()).toEqual('2016')
  });

  it('next year', () => {
    component.find('#year-right').simulate('click');
    expect(component.find('.year').text()).toEqual('2017');
    component.find('#year-right').simulate('click');
    expect(component.find('.year').text()).toEqual('2018')
  });

  it('hide picker', () => {
    component.find('#hide-picker').simulate('click');
    expect(component.find('.date-title').exists()).toBe(false);
    expect(component.find('.date-header').exists()).toBe(false);
    expect(component.find('.date-content').exists()).toBe(false);
    expect(component.find('.short-date').exists()).toBe(true)
  });

  it('show picker', () => {
    component.find('#show-picker').simulate('click');
    expect(component.find('.date-title').exists()).toBe(true);
    expect(component.find('.date-header').exists()).toBe(true);
    expect(component.find('.date-content').exists()).toBe(true);
    expect(component.find('.short-date').exists()).toBe(false)
  })
});
