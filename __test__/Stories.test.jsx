import { shallow } from 'enzyme';
import React from 'react';
import Stories from '../components/Stories';
import { SessionProvider } from 'next-auth/react';

describe('Stories test', () => {
  const setup = (props = {}, state = null, session = {}) => {
    return shallow(
      <SessionProvider session={session}>
        <Stories {...props} />
      </SessionProvider>
    );
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Stories component is rendered without crashing', () => {
    const wrapper = setup();
  });

});
