import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean, withKnobs } from '@storybook/addon-knobs';

import LoadingIndicator from './LoadingIndicator.component';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('LoadingIndicator', () => (
    <LoadingIndicator centered={boolean('Centered', false)} />
  ));
