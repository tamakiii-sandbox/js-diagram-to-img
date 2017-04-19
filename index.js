let CDP = require('chrome-remote-interface');
let fs = require('fs')

let screenshot = function(instance, startTime) {
  instance.Page.captureScreenshot().then(function(v) {
    let filename = `screenshot-${Date.now()}`
    fs.writeFileSync(filename + '.png', v.data, 'base64');
    console.log(`Image saved as ${filename}.png`);
    instance.close()
  })
}

module.exports = {
  outputHtml: function() {
    CDP((client) => {
      const {Page, Runtime} = client

      Promise.all([
        Page.enable()
      ]).then(() => {
        return Page.navigate({url: 'https://google.co.jp/'})
      })

      Page.loadEventFired(() => {
        Runtime.evaluate({expression: 'document.body.outerHTML'}).then((result) => {
          console.log(result.result.value)
          client.close()
        })
      })
    })
  },
  screenshot: function(url) {
    CDP.New(() => {
      CDP(instance => {
        instance.Page.loadEventFired(screenshot.bind(null, instance, Date.now()))
        instance.Page.enable()
        instance.once('ready', () => {
          console.log('navigating to', url)
          instance.Page.navigate({url: url})
        })
      })
    })
  }
}

module.exports.var = {}
