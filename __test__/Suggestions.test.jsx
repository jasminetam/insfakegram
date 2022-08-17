import { shallow } from 'enzyme';
import React from 'react';
import Suggestions from '../components/Suggestions';
import { SessionProvider } from 'next-auth/react';

describe('Suggestions test', () => {
  const setup = (props = {}, state = null, session = {}) => {
    return shallow(
      <SessionProvider session={session}>
        <Suggestions {...props} />
      </SessionProvider>
    );
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Suggestions component is rendered without crashing', () => {
    const wrapper = setup();
  });
});
