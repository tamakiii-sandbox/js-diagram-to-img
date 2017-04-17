var jQuery = require('jQuery')
var d3 = require('d3')

module.exports = {
  jQuery: jQuery,
  d3: d3,
  onload: function() {
    var $ = jQuery;

    $('input[type=submit]#encode').on('click', function() {
      var text = $('#svg').prop('outerHTML')
      console.log(text);
      var blob = new Buffer(text).toString('base64');
      $('textarea#output').val(blob);
    })
    $('input[type=submit]#apply').on('click', function() {
      var blob = $('textarea#output').val()
      $('#img').attr('src', 'data:image/svg+xml;base64,' + blob);
    })
  }
};
