import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-options/register';

// Necessary to fix a bug in storybook 4.1.1 (that should be fixed in 4.2)
// See https://github.com/storybooks/storybook/issues/4099 for details
import '@babel/polyfill';
