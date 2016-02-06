# family-crest-origins [![Build Status](https://travis-ci.org/joseluisq/family-crest-origins.svg?branch=master)](https://travis-ci.org/joseluisq/family-crest-origins)
> Get The Origins Of Your Family Crest for your surname.

## Install

```sh
$ npm install family-crest-origins --save-dev
```

## Usage

```js
var familyCrest = require('family-crest-origins');

familyCrest('Smith').then(function(origins) {
  console.log(origins);
  /*
    Origins Available: Dutch, English, German, Irish, Scottish...
    The people known in ancient Scotland as the Picts were the forefathers of
    the Smith family. It is a name for a smithy. Although Smith appears to be
    an occupational name for a blacksmith, it has been suggested that when
    surnames came into use in Scotland...
   */
});
```

## Contributions
[Pull requests](https://github.com/joseluisq/family-crest-origins/pulls) and [issues](https://github.com/joseluisq/family-crest-origins/issues) are be welcome.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
