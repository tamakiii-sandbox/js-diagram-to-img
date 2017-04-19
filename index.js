var jsdom = require('jsdom')
var fs = require('fs');

var html = fs.readFileSync('./sample/chart.js/index.html', 'utf-8');
var jQuery = require('jQuery');

jsdom.env(
  html,
  // 'https://iojs.org/dist/',
  ['http://code.jquery.com/jquery.js'],
  function (err, window) {
    console.log(window.$('#canvas').toDataURL('image/png'))
    // console.log('There have been', window.$('a').length - 4, 'io.js releases!')
  }
);

module.exports.var = {}
