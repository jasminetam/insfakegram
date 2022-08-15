import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header test', () => {
  it('expect Header component is rendered without crashing', () => {
    const wrapper = shallow(<Header />);
  });
  it('expect Header component is rendered', () => {
    const wrapper = shallow(<Header />);
  });
});
