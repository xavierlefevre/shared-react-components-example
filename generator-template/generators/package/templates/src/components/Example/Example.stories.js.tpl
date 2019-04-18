/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

<%_if (includeRedux) { -%>
import { withReduxProvider } from 'shared-components-<%= name %>/redux/storiesDecorator';

import <%= capitalizeName %>Component from './<%= capitalizeName %>.container';
<%_ } -%>
<%_if (!includeRedux) { -%>
import <%= capitalizeName %>Component from './<%= capitalizeName %>.component';
<%_ } -%>

<%_if (includeRedux) { -%>
storiesOf('<%= capitalizeName %>', module)
  .addDecorator(withReduxProvider)
  .add('sample', () => <<%= capitalizeName %>Component />);
<%_ } -%>
<%_if (!includeRedux) { -%>
storiesOf('<%= capitalizeName %>', module).add('sample', () => (
  <<%= capitalizeName %>Component message="hello world" />
));
<%_ } -%>
