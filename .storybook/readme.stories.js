import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import ReactMarkdown from 'react-markdown';
import welcomeText from '../readme.md';

storiesOf('Welcome', module).add('Getting started', () => (
  <ReactMarkdown source={welcomeText} escapeHtml={false} />
));
