var got = require('got')
var cheerio = require('cheerio')
var Promise = require('pinkie-promise')

module.exports = function (q) {
  if (typeof q !== 'string') {
    return Promise.reject(new Error('A surname is required'))
  }

  var url = 'https://www.houseofnames.com/fc.asp?s=' + q.toString().toLowerCase()

  return got(url)
    .then(function (res, err) {
      var $ = cheerio.load(res.body)
      var str = $('#coa').html()

      try {
        str = str.replace(/<br>/gi, '\n\n')
          .replace(/\<\/(li|div|strong)\>/gi, ' ')

        var $$ = cheerio.load(str)
        var data = $$(str).text()
          .replace(/(\s\s\n| More|Add To Cart)/g, '\n')
          .replace(/(\n\n)/g, '\n')
          .replace(/( More|Add To Cart|Buy JPG Image|Our PDF)/g, '')
          .replace(/(  |\r)/g, ' ')
          .replace(/(\r\n|\r)/gm, '')
          .replace(/\n\n\n/gm, '\n')
          .replace(/\n\n/gm, '\n')
          .replace(/(  )/gm, '\n\n')

        if (/Oops\! the name unknown was not found/.test(data) != -1) {
          return 'Oops! the name unknown was not found. Newly researched names are regularly uploaded.'
        }

        return data
      } catch (err) {
        throw err
      }
    })
    .catch(function (err) {
      if (err.statusCode === 404) {
        err.message = "URL doesn't exist"
      }

      throw err
    })
}
