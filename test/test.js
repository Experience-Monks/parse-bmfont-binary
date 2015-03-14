var read = require('../')
var test = require('tape')
var expected = require('./font.json')
var fs = require('fs')

test('reads BMFont Buffer into JSON', function(t) {
  t.plan(1)
  fs.readFile(__dirname+'/font.bin', function(err, buffer) {
    if (err) t.fail(err)
    var font = read(buffer)
    t.deepEqual(font, expected, 'font matches expected JSON')
  })
})