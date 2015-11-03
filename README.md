modular-css
===========
[![NPM Version](https://img.shields.io/npm/v/modular-css.svg)](https://www.npmjs.com/package/modular-css)
[![NPM License](https://img.shields.io/npm/l/modular-css.svg)](https://www.npmjs.com/package/modular-css)
[![NPM Downloads](https://img.shields.io/npm/dm/modular-css.svg)](https://www.npmjs.com/package/modular-css)
[![Build Status](https://img.shields.io/travis/tivac/modular-css.svg)](https://travis-ci.org/tivac/modular-css)
[![Dependency Status](https://img.shields.io/david/tivac/modular-css.svg)](https://david-dm.org/tivac/modular-css)
[![devDependency Status](https://img.shields.io/david/dev/tivac/modular-css.svg)](https://david-dm.org/tivac/modular-css#info=devDependencies)

Provides a subset of [css-modules](https://github.com/css-modules/css-modules) via CLI/API/Browserify transform.

## Why?

CSS Modules is an amazing idea but mostly non-functional for our needs as of November 2015.

This seemed like an interesting problem and a chance to pick & choose the most attractive parts of the CSS Modules spec while leaving out parts that we found to be confusing in practice. I also wanted more experience with PostCSS and this seemed like a great way to accomplish that.

## Install

`$ npm i modular-css`

## Usage

### CLI

`$ modular-css ./entry.css`

Will process `./entry.css` and output the processed CSS to stdout

`$ modular-css ./entry.css ./gen/entry.css`

Will process `./entry.css` and output the processed CSS to `./gen/entry.css` as well as a JSON file containing the scoped mapping to `./gen/entry.css.json`.


### API

```js
var process = require("modular-css").process,
    output;

output = process.file("./entry.css");

// or

output = process.string("./entry.css", ".fooga { ... } ...");

// output now contains
//  .css - processed CSS
//  .exports - Scoped selector mappings
//  .files - metadata about the file hierarchy
```

### Browserify

```js
var browserify = require("browserify"),
    build;

build = browserify("./entry.js");

build.transform("modular-css");

build.bundle(function(err, output) {
    ...
});
```

## Thanks

[@JoshGalvin](https://github.com/JoshGalvin) for ideas/encouragement to do this silly thing.

The CSS modules team for inspiration!

[@geelen](https://github.com/geelen)
[@joshgillies](https://github.com/joshgillies)
[@joshwnj](https://github.com/joshwnj)
[@markdalgleish](https://github.com/markdalgleish)
[@sokra](https://github.com/sokra)
[@sullenor](https://github.com/sullenor)
