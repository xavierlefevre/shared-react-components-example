import React from 'react';
import renderer from 'react-test-renderer';

import Button from '..';

describe('<Button />', () => {
  it('should match snapshot for normal button', () => {
    const props = {
      textLabel: 'AUTH_CONNEXION',
      type: 'button',
      className: 'button',
      onClick: () => null,
    };
    const renderedComponent = renderer.create(<Button {...props} />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match snapshot for light button', () => {
    const props = {
      textLabel: 'AUTH_CONNEXION',
      type: 'button',
      className: 'button',
      onClick: () => null,
      light: true,
    };
    const renderedComponent = renderer.create(<Button {...props} />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match snapshot for small button', () => {
    const props = {
      textLabel: 'AUTH_CONNEXION',
      type: 'button',
      className: 'button',
      onClick: () => null,
      small: true,
    };
    const renderedComponent = renderer.create(<Button {...props} />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match snapshot for gradient button', () => {
    const props = {
      textLabel: 'AUTH_CONNEXION',
      type: 'button',
      className: 'button',
      onClick: () => null,
      gradient: {
        color: '#AAAAAA',
        finalColor: '#FFFFFF',
        initialColor: '#000000',
      },
    };
    const renderedComponent = renderer.create(<Button {...props} />);
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
    expect(renderedComponent).toMatchSnapshot();
  });
});
