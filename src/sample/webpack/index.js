var jQuery = require('jQuery');
var Buffer = require('buffer/').Buffer

module.exports = {
  jQuery: jQuery,
  encode: function (text) {
    return new Buffer(text).toString('base64');
  }
};
