import React from 'react';
import renderer from 'react-test-renderer';
import styled, { ThemeProvider } from 'styled-components';

import { withDefaultTheme, themeMerger } from './customization';

const emptyTheme = {
  MySubComponent: {},
};

describe('themeMerger', () => {
  it('it should return an empty theme for MySubComponent if main theme is null', () => {
    const result = themeMerger('MyComponent', 'subcomponent', 'MySubComponent')(
      null
    );
    expect(result).toEqual(emptyTheme);
  });

  it('it should return an empty theme for MySubComponent if main theme is undefined', () => {
    const result = themeMerger(
      'MyComponent',
      'subcomponent',
      'MySubComponent'
    )();
    expect(result).toEqual(emptyTheme);
  });

  it('it should return main theme if there is no specific theme for the widget', () => {
    const inputTheme = {
      MySubComponent: {
        color: 'orange',
      },
    };
    const result = themeMerger('MyComponent', 'subcomponent', 'MySubComponent')(
      inputTheme
    );
    expect(result).toEqual(inputTheme);
  });

  it('it should return main theme if the widget theme does not define any specific theme for the subcomponent', () => {
    const inputTheme = {
      MyComponent: {
        color: 'black',
      },
      MySubComponent: {
        color: 'orange',
      },
    };
    const result = themeMerger('MyComponent', 'subcomponent', 'MySubComponent')(
      inputTheme
    );
    expect(result).toEqual(inputTheme);
  });

  it('it should copy the specific theme for the subcomponent into the main theme', () => {
    const inputTheme = {
      MyComponent: {
        color: 'black',
        subcomponent: {
          color: 'red',
        },
      },
    };
    const expectedTheme = {
      MyComponent: {
        color: 'black',
        subcomponent: {
          color: 'red',
        },
      },
      MySubComponent: {
        color: 'red',
      },
    };
    const result = themeMerger('MyComponent', 'subcomponent', 'MySubComponent')(
      inputTheme
    );
    expect(result).toEqual(expectedTheme);
  });

  it('it should copy the specific theme for the subcomponent into the main theme and merge with the existing one', () => {
    const inputTheme = {
      MyComponent: {
        color: 'black',
        subcomponent: {
          color: 'red',
        },
      },
      MySubComponent: {
        color: 'orange',
        otherProp: 'value',
      },
    };

    const expectedTheme = {
      MyComponent: {
        color: 'black',
        subcomponent: {
          color: 'red',
        },
      },
      MySubComponent: {
        color: 'red',
        otherProp: 'value',
      },
    };

    const result = themeMerger('MyComponent', 'subcomponent', 'MySubComponent')(
      inputTheme
    );
    expect(result).toEqual(expectedTheme);
  });
});

const theme = {
  MyComponent: {
    color: 'black',
    subcomponent: {
      color: 'red',
    },
  },
  MySubComponent: {
    color: 'orange',
    otherProp: 'value',
  },
};
const defaultTheme = {
  color: 'red',
  backgroundColor: 'black',
};

const StyledComponent = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;
const WrappedComponent = withDefaultTheme(StyledComponent, {
  defaultTheme,
  name: 'MySubComponent',
});

describe('withDefaultTheme', () => {
  it('should return a component', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <WrappedComponent />
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a component with the default theme', () => {
    const component = renderer.create(<WrappedComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
