import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean, withKnobs } from '@storybook/addon-knobs';

import Button from './Button.style';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button
      disabled={boolean('disabled', false)}
      small={boolean('small', false)}
      light={boolean('light', false)}
    >
      <span className="button-label">label</span>
    </Button>
  ));
