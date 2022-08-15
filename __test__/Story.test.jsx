import { shallow } from 'enzyme';
import React from 'react';
import Story from '../components/Story';

describe('Story test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Story {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Story component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-Story is rendered', () => {
    const wrapper = setup();
    const Story = findJSXByAttr('component-Story', wrapper);
    expect(Story.length).toBe(1);
  });
});
