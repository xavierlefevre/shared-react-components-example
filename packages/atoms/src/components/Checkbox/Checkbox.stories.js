import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import Checkbox from './Checkbox.component';
import Theme from './Checkbox.theme';

class CheckboxStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleCheckBoxChange({ target }) {
    this.setState({
      checked: target.checked,
    });
  }

  render() {
    const { checked } = this.state;

    return (
      <Checkbox
        {...this.props}
        checked={checked}
        onChange={this.handleCheckBoxChange}
      />
    );
  }
}

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('Checkbox', () => (
    <CheckboxStory
      disabled={boolean('disabled', false)}
      theme={object('Theme', Theme)}
      showError={boolean('showError', false)}
    >
      Label
    </CheckboxStory>
  ));
