import React from 'react';
import {shallow} from 'enzyme';
import Home from './home';

describe('home', () => {
  it('works', () => {
    const home = shallow(<Home />);
    console.info(home.children());
  });
});
