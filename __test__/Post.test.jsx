import { render, shallow } from 'enzyme';
import React from 'react';
import Post from '../components/Post';
import { SessionProvider } from 'next-auth/react';

describe('Post test', () => {
  const setup = (props = {}, state = null, session = {}) => {
    return shallow(
      <SessionProvider session={session}>
        <Post {...props} />
      </SessionProvider>
    );
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Post component is rendered without crashing', () => {
    const wrapper = setup();
  });
});
