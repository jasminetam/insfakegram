import React from 'react';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import MyApp from '../pages/_app';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (pageProps = {AppInitialProps}, state = null) => {
  return shallow(<MyApp {...pageProps} />);
};

test('check if App is able to be rendered', () => {
  const wrapper = setup();
});
