import React from 'react';
import {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import  Header  from '../components/Header';


const setup = () => {
    return shallow(<Header />)
}

test('check if Header is able to be rendered', () => {
  const wrapper = setup();
});
