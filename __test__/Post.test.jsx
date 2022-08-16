import { shallow } from 'enzyme';
import React from 'react';
import Post from '../components/Post';

describe('Post test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Post {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Post component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-Post is rendered', () => {
    const wrapper = setup();
    const Post = findJSXByAttr('component-Post', wrapper);
    expect(Post.length).toBe(1);
  });
});
