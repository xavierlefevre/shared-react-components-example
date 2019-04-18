import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';

import WidgetTemplate from './component';

describe('<WidgetTemplate />', () => {
  it('should show its title when given showTitle', () => {
    const wrapper = mount(
      <WidgetTemplate fundData={{ legal_name: 'Legal Name' }} showTitle />
    );
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('should hide its title when not given showTitle', () => {
    const wrapper = mount(
      <WidgetTemplate fundData={{ legal_name: 'Legal Name' }} />
    );
    expect(wrapper.find('span').length).toEqual(0);
  });
});
