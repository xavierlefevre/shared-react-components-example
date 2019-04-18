# How to style a component on SharedComponents

This documentation specifically concerns the `widgets` package for now. Other sections will be added later for `ui` and the different products.

## Customizable widgets

In `widgets`, every exported component should be in a folder with the following structure:

```
.
├── __snapshots__
│   └── test.js.snap
├── component.js
├── container.js
├── index.js
├── modelizer.js
├── stories.js
├── style.js
├── test.js
└── theme.js
```

### 1. Style your component with styled-components

The styling is done exclusively with `styled-components` (look [here](https://www.styled-components.com/docs) for the documentation) and is declared in `style.js`. Create as many components as needed and use them in `component.js`.

```jsx
// style.js
import styled from 'styled-components';

export const Container = styled.section`
  font-family: 'Lato';
`;

export const Block = styled.div`
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Source = styled.div`
  border-top: 1px solid grey;
  font-family: 'Lato';
  font-size: 12px;
  color: #444;
`;
```

```jsx
// component.js

import {Container, Block, Source, Content} from './style';

const Component = () => (
  <Container>
    <FormattedMessage id="TITLE" />
    <Block>
      <Content>
        <FormattedMessage id="DATA" />
      </Content>
      <Source>
        <FormattedMessage id="SOURCE" />
      </Source>
    </Block>
  </Container>
);
```

### 2. Change some properties to make them customizable

A customizable component is a component that changes a part of its CSS based on incoming props. For each CSS property you want to customize, add something like this:

```
font-family: ${props => props.theme.fontFamily};
```

`theme` is mandatory (don't change it). As for the name of the property, the one you choose will be a part of your customization API, so don't hesitate to use an understandable name.

```jsx
// style.js

import styled from 'styled-components';

export const Container = styled.section`
  font-family: ${props => props.theme.fontFamily};
`;

export const Block = styled.div`
  padding: 0 ${props => props.theme.sideSpacing};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Source = styled.div`
  border-top: 1px solid ${props => props.theme.sourceDelimiterColor};
  font-family: ${props => props.theme.sourceFontFamily};
  font-size: ${props => props.theme.sourceFontSize};
  color: ${props => props.theme.sourceColor};
`;
```

### 3. Define a default theme

For every props you made customizable, we need a default styling value, in case your user does not set one.

In `theme.js` add an object containing the styling default values for **all your styled components** and export it.

```jsx
// theme.js

export default {
  fontFamily: '"Lato"',
  sideSpacing: '20px',
  sourceColor: '#444',
  sourceFontFamily: '"Lato"',
  sourceDelimiterColor: 'grey',
  sourceFontSize: '12px'
};
```

Import it in `style.js` and use the `withDefaultTheme` wrapper from `widgets` to link it to your style. Your file should now look like this.

```jsx
// style.js

import styled from 'styled-components';

import {withDefaultTheme} from 'widgets/style/customization';

import DefaultTheme from './theme';

export const Container = withDefaultTheme(
  styled.section`
    font-family: ${props => props.theme.fontFamily};
  `,
  {
    defaultTheme: DefaultTheme,
    name: 'myComponent' // This must be the name of your component starting with a lowercase
  }
);

export const Block = withDefaultTheme(
  styled.div`
    padding: 0 ${props => props.theme.sideSpacing};
  `,
  {
    defaultTheme: DefaultTheme,
    name: 'myComponent'
  }
);

export const Content = withDefaultTheme(
  styled.div`
    display: flex;
    flex-wrap: wrap;
    color: black;
  `,
  {
    defaultTheme: DefaultTheme,
    name: 'myComponent'
  }
);

export const Source = withDefaultTheme(
  styled.div`
    border-top: 1px solid ${props => props.theme.sourceDelimiterColor};
    font-family: ${props => props.theme.sourceFontFamily};
    font-size: ${props => props.theme.sourceFontSize};
    color: ${props => props.theme.sourceColor};
  `,
  {
    defaultTheme: DefaultTheme,
    name: 'myComponent'
  }
);
```

### 4. Make the component customizable in Storybook

To make sure your users know they can modify the style and how to do it, add a knob controlling the component style, originally set to the default theme.

```jsx
// stories.js
import {storiesOf} from '@storybook/react';
import {object, withKnobs} from '@storybook/addon-knobs';
import {ThemeProvider} from 'styled-components';
import MyComponent from './component';
import DefaultTheme from './theme';

storiesOf('MyComponent', module)
  .addDecorator(withKnobs)
  .add('My Component', () => (
    <ThemeProvider theme={object('Theme', {myComponent: DefaultTheme})}>
      <MyComponent />
    </ThemeProvider>
  ));
```

This will display your component in Storybook with a "Theme" parameter. Its default value will be the default theme, and changing the values will impact the appearance of the component.

### 5. Specify a theme for your widget

To customize your widget and stop using the default theme, you can do exactly as in the story definition above.

```jsx
// myApplication.js

import { MyComponent } from '@shared-components/molecules';

const myTheme = {
  myComponent: {
    // fontFamily: '"Lato"', // if you don't set a value, the default one is used
    sideSpacing: '30px',
    sourceColor: '#123',
    // sourceFontFamily: '"Lato"',
    sourceDelimiterColor: 'black',
    sourceFontSize: '22px',
  },
  ...myCustomThemesForOtherComponents
};

const MyApplication = () => (
  <ThemeProvider theme={myTheme}>
    <MyComponent />
    <!-- Other widgets or any JSX -->
  </ThemeProvider>
)
```

### 6. How to handle customizable widgets within customizable widgets

Now I want to use an already customizable widget in another one. We need to ensure three behaviors:

- AAUser, I can define a theme for `AlreadyCustomizableWidget` that will be respected even by the one wrapped in `MyWidget`
- AAUser, I can specify a different theme for `AlreadyCustomizableWidget` wrapped in `MyWidget`.
- AAUser, I can specify a default theme for `MyWidget` where `AlreadyCustomizableWidget` does not use its default theme

First one is already working (Yay \o/). For the second and third ones, we still have a bit of work to do (and unfortunately, adding the third one breaks the first).

```jsx
// myWidget/component.js

import { AlreadyCustomizableWidget } from '@shared-components/customizable';
import { themeMerger } from 'widgets/style/customization';
import { Container } from './style';

export const MyWidget = () => (
  <Container>
    <FormattedMessage id="TITLE" />
    <ThemeProvider
      theme={parentTheme =>
        themeMerger( /* this function merges parentTheme.myWidget.ratatatata into parentTheme.alreadyCustomizableWidget before returning it as new theme */
          'myWidget', // the name of the current widget
          'ratatatata', // you can set this to anything (but it will be part of the API, so make it meaningful)
          'alreadyCustomizableWidget' // the name of the integrated widget
        )(
          parentTheme
        )
      }
    >
      <AlreadyCustomizableWidget />
    </ThemeProvider>
  </Container>
)

// Define a default theme for our Widget, where we set a theme for alreadyCustomizableWidget
const defaultTheme = {
  ratatatata: {
    color: 'white',
  },
};

export const MyWidgetWithDefaultTheme = (props) => (
  <ThemeProvider
    theme={parentTheme => ({
      ...parentTheme,
      myWidget: {
        ...defaultTheme, // here we make sure at least our default theme exists for MyWidget
        ...(parentTheme && parentTheme.myWidget), // and we overwrite it with the given one if it exists
      },
    })}
  >
    <MyWidget {...props} /> {/* Don't forget the props if your widget needs some */}
  </ThemeProvider>
);
```

And that's all. Now, if these are the default themes

```jsx
// myWidget/theme.js

export default {
  backgroundColor: 'orange'
};
```

```jsx
// alreadyCustomizableWidget/theme.js

export default {
  color: 'orange'
};
```

And if this code below is your application, you will obtain the behavior described in the comments.

```jsx
// myApplication.js

import { MyWidget, MyWidgetWithDefaultTheme, AlreadyCustomizableWidget } from '@shared-components/molecules';

const myTheme = {
  myWidget: {
    backgroundColor: 'black',
  },
  alreadyCustomizableWidget: {
    color: 'red',
  },
};

const myOtherTheme = {
  myWidget: {
    backgroundColor: 'black',
    ratatatata: {
      color: 'green',
    },
  },
  alreadyCustomizableWidget: {
    color: 'red',
  },
};

const MyApplication = () => (
  <div>
    <ThemeProvider theme={myTheme}>
      <AlreadyCustomizableWidget /> {/* AlreadyCustomizableWidget text is red */}
      <MyWidget /> {/* MyWidget background is black, AlreadyCustomizableWidget text is red */}
      <MyWidgetWithDefaultTheme /> {/* MyWidget background is black, AlreadyCustomizableWidget text is white */}
    </ThemeProvider>
    <ThemeProvider theme={myOtherTheme}>
      <AlreadyCustomizableWidget /> {/* AlreadyCustomizableWidget text is red */}
      <MyWidget /> {/* MyWidget background is black, AlreadyCustomizableWidget text is green */}
      <MyWidgetWithDefaultTheme /> {/* MyWidget background is black, AlreadyCustomizableWidget text is green */}
    </ThemeProvider>
    <AlreadyCustomizableWidget /> {/* AlreadyCustomizableWidget text is orange */}
    <MyWidget /> {/* MyWidget background is orange, AlreadyCustomizableWidget text is orange */}
    <MyWidgetWithDefaultTheme /> {/* MyWidget background is orange, AlreadyCustomizableWidget text is white */}
  </div>
)
```
