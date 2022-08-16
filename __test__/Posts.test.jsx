import { shallow } from 'enzyme';
import React from 'react';
import Posts from '../components/Posts';

describe('Posts test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Posts {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Posts component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-Posts is rendered', () => {
    const wrapper = setup();
    const Posts = findJSXByAttr('component-Posts', wrapper);
    expect(Posts.length).toBe(1);
  });
});
