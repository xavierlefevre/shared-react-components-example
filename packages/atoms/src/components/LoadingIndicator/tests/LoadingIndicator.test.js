import React from 'react';
import renderer from 'react-test-renderer';

import LoadingIndicator from '../LoadingIndicator.component';

describe('<LoadingIndicator />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<LoadingIndicator />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
