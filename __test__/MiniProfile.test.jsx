import { shallow } from 'enzyme';
import React from 'react';
import MiniProfile from '../components/MiniProfile';

describe('MiniProfile test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<MiniProfile {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect MiniProfile component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-MiniProfile is rendered', () => {
    const wrapper = setup();
    const MiniProfile = findJSXByAttr('component-MiniProfile', wrapper);
    expect(MiniProfile.length).toBe(1);
  });
});
