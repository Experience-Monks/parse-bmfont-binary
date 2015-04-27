var read = require('../')
var test = require('tape')
var fs = require('fs')

test('reads BMFont Buffer into JSON', function(t) {
  var expected = require('./font.json')
  t.plan(1)
  fs.readFile(__dirname+'/font.bin', function(err, buffer) {
    if (err) t.fail(err)
    var font = read(buffer)
    t.deepEqual(font, expected, 'font matches expected JSON')
  })
})


test('reads BMFont with negative values into JSON', function(t) {
  var expected = require('./font2.json')
  t.plan(1)
  fs.readFile(__dirname+'/font2.bin', function(err, buffer) {
    if (err) t.fail(err)
    var font = read(buffer)

    //clean up expected JSON slightly (some apps dont export this)
    expected.info.outline = 0
    var common = expected.common
    ;['red','blue','green','alpha'].forEach(function(key) {
      common[key+'Chnl'] = key === 'alpha' ? 1 : 0
    })

    t.deepEqual(font.common, expected.common, 'font matches expected JSON')
  })
})