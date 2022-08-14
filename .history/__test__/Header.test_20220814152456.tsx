import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import  Header  from '../components/Header';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const setup = () => {
    return shallow(<Header />)
}

const findJSXByAttr = (name: string, wrapper: any) => {
    return wrapper.find(`[data-test="${name}"]`)
}

test('check if Header is able to be rendered', () => {
  const wrapper = setup();
});
