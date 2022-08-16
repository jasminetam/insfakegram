import { shallow } from 'enzyme';
import React from 'react';
import Suggestions from '../components/Suggestions';

describe('Suggestions test', () => {
  const setup = (props = {}, state = null) => {
    return shallow(<Suggestions {...props} />);
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Suggestions component is rendered without crashing', () => {
    const wrapper = setup();
  });

  it('expect component-Suggestions is rendered', () => {
    const wrapper = setup();
    const Suggestions = findJSXByAttr('component-Suggestions', wrapper);
    expect(Suggestions.length).toBe(1);
  });
});
