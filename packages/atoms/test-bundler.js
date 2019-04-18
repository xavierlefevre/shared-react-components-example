/* eslint-disable import/no-extraneous-dependencies */
require('jest-styled-components');

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });
