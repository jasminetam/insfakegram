import { shallow } from 'enzyme';
import React from 'react';
import DropdownMenu from '../components/DropdownMenu';

describe('DropdownMenu test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<DropdownMenu {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect DropdownMenu component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-DropdownMenu is rendered', () => {
    const wrapper = setup();
    const DropdownMenu = findJSXByAttr('component-DropdownMenu', wrapper);
    expect(DropdownMenu.length).toBe(1);
  });
});
