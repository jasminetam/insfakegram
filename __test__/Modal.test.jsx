import { render } from 'enzyme';
import React from 'react';
import Modal from '../components/Modal';
import { SessionProvider } from 'next-auth/react';
import {RecoilRoot} from 'recoil'

describe('Modal test', () => {
  const setup = (props = {}, state = null) => {
    return render(
      <SessionProvider>
        <RecoilRoot>
          <Modal {...props} />
        </RecoilRoot>
      </SessionProvider>
    );
  };

  const findJSXByAttr = (name, wrapper) => {
    return wrapper.find(`[data-test="${name}"]`);
  };

  it('expect Modal component is rendered without crashing', () => {
    const wrapper = setup();
  });

});
