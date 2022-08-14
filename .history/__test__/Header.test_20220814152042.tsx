import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import  Header  from '../components/Header';

Enzyme.configure({ adapter: new EnzymeAdapter()});


let mockProps = {
    name:"", fetchFunction:"", fetchGenre:""
}

const setup = () => {
    return shallow(<Header />)
}

const findJSXByAttr = (name: string, wrapper: any) => {
    return wrapper.find(`[data-test="${name}"]`)
}

test('check if Header is able to be rendered', () => {
  const wrapper = setup;

});

test('check if Header header is able to be rendered', () => {
  const wrapper = setup(mockProps);
  const header = findJSXByAttr('component-app-showHeader', wrapper)
  expect(header.length).toBe(1);;

});

test('check if Header list is able to be rendered', () => {
  mockProps = {
    ...mockProps,
    fetchFunction: 'lol'
  }
  const wrapper = setup(mockProps, null);
  const header = findJSXByAttr('component-app-showList', wrapper)
  expect(header).toBeTruthy();

});