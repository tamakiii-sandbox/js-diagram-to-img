const CDP = require('chrome-remote-interface');

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

module.exports.var = {}
