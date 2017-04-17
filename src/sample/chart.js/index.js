var jQuery = require('jQuery');
var Chartjs = require('chart.js');

module.exports = {
  jQuery: jQuery,
  Chartjs: Chartjs,
  onload: function() {
    var $ = jQuery;

    $('input[type=submit]#encode').on('click', function() {
      var text = $('textarea#input').val()
      var blob = document.getElementById('canvas').toDataURL('image/png')
      $('textarea#output').val(blob)
    })
    $('input[type=submit]#apply').on('click', function() {
      var blob = $('textarea#output').val()
      $('#img').attr('src', blob)
    })
  }
};
