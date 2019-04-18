import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '../Checkbox.component';

describe('<Checkbox />', () => {
  const onChange = jest.fn();

  it('should match snapshot with label', () => {
    const component = renderer.create(
      <Checkbox id="1" onChange={onChange} checked={false}>
        Label
      </Checkbox>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when checked', () => {
    const component = renderer.create(
      <Checkbox checked id="2" onChange={onChange} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when disabled', () => {
    const component = renderer.create(
      <Checkbox disabled checked={false} id="3" onChange={onChange} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot when errored', () => {
    const component = renderer.create(
      <Checkbox checked={false} id="4" onChange={onChange} showError />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
