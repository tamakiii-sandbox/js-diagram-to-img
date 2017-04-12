var Buffer = require('buffer/').Buffer

module.exports = {
  encode: function (text) {
    return new Buffer(text).toString('base64');
  }
};
