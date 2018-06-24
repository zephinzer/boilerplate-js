import chai from 'chai';
import sinonChai from 'sinon-chai';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// let us use expect(...).to.be.called*(...) globally
chai.use(sinonChai);
global.expect = chai.expect;

// set the enzyme adapter
// @see https://airbnb.io/enzyme/docs/installation/
enzyme.configure({adapter: new Adapter()});

// require the polyfill for Object.*
require('../../node_modules/babel-polyfill/dist/polyfill');

// indicate where tests should be run from, we use the ~/src directory
const context = require.context('../', true, /.test.js$/);
context.keys().forEach(context);
