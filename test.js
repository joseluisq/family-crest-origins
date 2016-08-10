var test = require('tape')
var familyCrest = require('./')

test('Family Crest Origins Test Suite', function (t) {
  t.plan(3)

  familyCrest().catch(function (error) {
    t.ok(error, 'should be an error object.')
  })

  familyCrest('Smith').then(function (res) {
    t.ok(res, '`Smith` surname should be valid.')
  })

  familyCrest('unknown').then(function (res) {
    t.ok(1, '`unknown` surname should be invalid.')
  })
})
