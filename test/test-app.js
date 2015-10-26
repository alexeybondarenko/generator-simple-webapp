'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('simple-webapp:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      'gulpfile.js',
      '.editorconfig',
      '.gitignore',
      '.jshintrc'
    ]);
  });
  it('creates folders', function () {
    assert.dir([
      'bower.json',
      'package.json',
      'gulpfile.js',
      '.editorconfig',
      '.gitignore',
      '.jshintrc'
    ]);
  });
});
