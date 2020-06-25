import React from 'react';
import { configure, shallow, mount ,render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import Index from '../client/src/index.jsx';
import Gallery from '../client/src/components/Gallery.jsx';
import BigThumb from '../client/src/components/BigThumb.jsx';

describe('Image Gallery Component Tests', () => {
  test('index renders', () => {
    const wrapper = mount(<Index/>);
    expect(wrapper.exists('.thumbnail')).to.equal(true);
  });

  test('Gallery modal should render', () => {
    const wrapper = shallow(<Gallery/>);
    expect(wrapper.exists('.modal-content')).to.equal(true);
  });

});


