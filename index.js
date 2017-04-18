var request = require('request')
// var fs = require('fs')
// var URL = require('url')
//
// var args = require('tav').set(
//   {
//     url:{
//       note:'URL of the page to parse'
//     }
//   },
//   'node-dom for node.js',
//   true
// );

module.exports = {
  execute: function(url) {
    console.log('hi')
    // var url = URL.parse(args.url);
    // var url = URL.parse(url);
    // var req = {uri: url.href};
    // this.request(req);
  },
  request: function(req) {
    /*
    function (error, response, page) {
      if (!error && response.statusCode == 200) {
        var options = {
          url: url,
          features: {
            FetchExternalResources: {script:'', img:'', input:'', link:''},
            ProcessExternalResources: {script:'',img:'',link:'',input:''},
            removeScript: true //Remove scripts for innerHTML and outerHTML output
          }
        };

        window = dom(page, null, options); //global

        document = window.document; //global

        document.onload=function() {
          //Warning : you are not in the window context here (ie you can not access window's global var as global variables directly)
          //Context are explained here https://github.com/joyent/node/issues/1674

          fs.writeFile('./outer.html', document.html.outerHTML, function (err) {});
          //check the result in outer.html file
          //to test the result in a browser, don't forget to put the base tag after <head> with the correct href
        };
      };
    };
    */
  }
};
