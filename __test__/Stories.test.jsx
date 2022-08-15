import { shallow } from 'enzyme';
import React from 'react';
import Stories from '../components/Stories';

describe('Stories test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Stories {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Stories component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-Stories is rendered', () => {
    const wrapper = setup();
    const Stories = findJSXByAttr('component-Stories', wrapper);
    expect(Stories.length).toBe(1);
  });
});
