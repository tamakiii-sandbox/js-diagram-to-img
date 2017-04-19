var jsdom = require('jsdom')

jsdom.env(
  'https://iojs.org/dist/',
  ['http://code.jquery.com/jquery.js'],
  function (err, window) {
    console.log('There have been', window.$('a').length - 4, 'io.js releases!')
  }
);

module.exports.var = {}
