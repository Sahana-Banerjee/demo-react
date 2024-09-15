import React from 'react';
import { shallow } from 'enzyme';
import home-page from './home-page';

describe('<home-page />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<home-page />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
