import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';
import { SessionProvider } from 'next-auth/react';

describe('Header test', () => {
  it('expect Header component is rendered without crashing', () => {
    const wrapper = shallow(
      <SessionProvider>
        <Header />
      </SessionProvider>
    );
  });
  it('expect Header component is rendered', () => {
    const wrapper = shallow(
      <SessionProvider>
        <Header />
      </SessionProvider>
    );
  });
});
