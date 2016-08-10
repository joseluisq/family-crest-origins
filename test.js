var test = require('tape')
var familyCrest = require('./')

test('Family Crest Origins Test Suite', function (t) {
  t.plan(3)

  familyCrest('Smith').then(function (res) {
    t.ok(res, 'should be ok for valid surname.')
  })

  familyCrest('unknown').catch(function (e) {
    t.ok(e, 'should throw an error when surname is not found.')
  })

  familyCrest().catch(function (e) {
    t.ok(e, 'should throw an error when surname is not provided.')
  })
})
