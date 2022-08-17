import { shallow } from 'enzyme';
import React from 'react';
import SideProfile from "../components/SideProfile"
import { SessionProvider } from 'next-auth/react';

describe('SideProfile test', () => {
  const setup = (props = {}, state = null, session = {}) => {
    return shallow(
      <SessionProvider session={session}>
        <SideProfile {...props} />
      </SessionProvider>
    );
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect SideProfile component is rendered without crashing', () => {
    const wrapper = setup();
  });

});
