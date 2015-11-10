'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var util = require('util');
var path = require('path');
var yosay = require('yosay');

var AppGenerator = module.exports = function AppGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.appname = path.basename(process.cwd());

  this.option('skip-welcome-message', {
    desc: 'Skips the welcome message',
    type: Boolean
  });

  this.option('skip-install-message', {
    desc: 'Skips the message after the installation of dependencies',
    type: Boolean
  });

  this.on('end', function () {
    console.log('end');
    this.installDependencies();
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../../package.json')));
};

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the laudable ' + chalk.red('SimpleWebapp') + ' generator!'
  ));

  var prompts = [];

  this.prompt(prompts, function (props) {

    function hasFeature(feat) { return props.features.indexOf(feat) !== -1; }

    //this.framework = props.framework;
    //this.sass = props.sass;
    //this.sass = props.sass;
    //this.modernizr = hasFeature('modernizr');
    //this.autoprefixer = hasFeature('autoprefixer');

    cb();
  }.bind(this));
};


AppGenerator.prototype.git = function git() {
  console.log("git");
  this.copy('.gitignore', '.gitignore');
};

AppGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('.editorconfig', '.editorconfig');
};
AppGenerator.prototype.packageJSON = function packageJSON() {
  var pkg = require(this.templatePath('package.json'));
  pkg.name = this.appname;
  this.fs.writeJSON(this.destinationPath('package.json'), pkg);
};
AppGenerator.prototype.gulpfile = function gruntfile() {
  this.template('gulpfile.js', 'gulpfile.js');
};

AppGenerator.prototype.bower = function bower() {
  var bowerJson = require(this.templatePath('bower.json'));
  bowerJson.name = this.appname;
  this.fs.writeJSON(this.destinationPath('bower.json'), bowerJson);

  //this.template('bower.json', 'bower.json');
  //this.copy('bowerrc', '.bowerrc');
};

AppGenerator.prototype.readIndex = function readIndex() {
  //this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
  //this.indexFile = this.engine(this.indexFile, this);
};

AppGenerator.prototype.writeIndex = function writeIndex() {
  //var fndir = 'bower_components/foundation/js/foundation/';
  //var twbsdir = 'bower_components/sass-bootstrap/js/';
  //if (this.framework == 'foundation') {
  //  this.indexFile = this.appendScripts(this.indexFile, 'js/foundation.js', [
  //    fndir + "foundation.js",
  //    fndir + "foundation.abide.js",
  //    fndir + "foundation.accordion.js",
  //    fndir + "foundation.alert.js",
  //    fndir + "foundation.clearing.js",
  //    fndir + "foundation.dropdown.js",
  //    fndir + "foundation.interchange.js",
  //    fndir + "foundation.joyride.js",
  //    fndir + "foundation.magellan.js",
  //    fndir + "foundation.offcanvas.js",
  //    fndir + "foundation.orbit.js",
  //    fndir + "foundation.reveal.js",
  //    fndir + "foundation.tab.js",
  //    fndir + "foundation.tooltip.js",
  //    fndir + "foundation.topbar.js"
  //  ]);
  //} else if (this.framework == 'bootstrap') {
  //  this.indexFile = this.appendScripts(this.indexFile, 'js/bootstrap.min.js', [
  //    twbsdir + "affix.js",
  //    twbsdir + "alert.js",
  //    twbsdir + "dropdown.js",
  //    twbsdir + "tooltip.js",
  //    twbsdir + "modal.js",
  //    twbsdir + "transition.js",
  //    twbsdir + "button.js",
  //    twbsdir + "popover.js",
  //    twbsdir + "carousel.js",
  //    twbsdir + "scrollspy.js",
  //    twbsdir + "collapse.js",
  //    twbsdir + "tab.js"
  //  ]);
  //}
};

AppGenerator.prototype.stylesheets = function stylesheets() {
  //if (this.framework == 'bootstrap' && this.sass) {
  //  this.template('bootstrap.scss', 'app/scss/main.scss');
  //} else if (this.framework == 'foundation' && this.sass) {
  //  this.copy('foundation.scss', 'app/scss/main.scss');
  //}
};

AppGenerator.prototype.app = function app() {
  this.directory('src', 'src');
  //this.copy('', 'src/css');
  //this.copy('', 'src/images');
  //this.copy('', 'src/js');
  //this.copy('', 'src/static');
  //this.mkdir('src/css');
  //this.mkdir('src/images');
  //this.mkdir('src/js');
  //this.mkdir('src/static');

  var templateFiles = [
    'src/static/404.html',
    'src/jade/index.jade',
    'src/js/app.js'
  ];
  templateFiles.forEach(function (name) {
    this.template(name, name);
  }.bind(this));
};
