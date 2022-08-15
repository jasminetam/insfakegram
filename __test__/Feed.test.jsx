import React from 'react';
import { shallow } from 'enzyme';
import Feed from '../components/Feed';

describe('Feed test', () => {
  it('expect Feed component is rendered without crashing', () => {
    const wrapper = shallow(<Feed />);
  });
  it('expect Feed component is rendered', () => {
    const wrapper = shallow(<Feed />);
  });
});
