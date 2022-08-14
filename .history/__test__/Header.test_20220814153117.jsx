import React from 'react';
import {shallow} from 'enzyme';
import  Header  from '../components/Header';


describe("navigation test", () => {
  it("expect Navigation component is rendered without crashing", () => {
    const wrapper = shallow(<Navigation />);
  });
  it("expect Navigation component is rendered", () => {
    const wrapper = shallow(<Navigation />);
  });

})