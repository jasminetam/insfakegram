import React from 'react';
import { shallow } from 'enzyme';
import Feed from '../components/Feed';
import { SessionProvider } from 'next-auth/react';

describe('Feed test', () => {
  it('expect Feed component is rendered without crashing', () => {
    const wrapper = shallow(<SessionProvider><Feed /></SessionProvider>);
  });
  it('expect Feed component is rendered', () => {
    const wrapper = shallow(<SessionProvider><Feed /></SessionProvider>);
  });
});
