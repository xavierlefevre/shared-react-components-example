// @flow
import outputReuses from './reusability';

const args = process.argv.slice(2);
const type = args[0];
const arg1 = args[1];
const arg2 = args[2];
const arg3 = args[3];

// To get the reusability indicator:
// yarn reuses {year} {month} (optional: {project})
// yarn reuses 2019 11
if (type === 'reusability')
  outputReuses(parseInt(arg1, 10), parseInt(arg2, 10), arg3);
