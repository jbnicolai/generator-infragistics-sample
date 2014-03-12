'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var InfragisticsSampleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
  },

  askFor: function () {
    var done = this.async();

    this.log(this.yeoman);

    this.log(chalk.yellow('Welcome to the Infragistics sample generator!'));

    var prompts = [{
      name: 'name',
      message: 'What is the name of your sample?',
      default: 'Infragistics Sample'
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('readme.md', 'readme.md');
    this.copy('license.md', 'license.md');
    this.copy('third-party-notices.md', 'third-party-notices.md');
    this.template('index.html', 'index.html');
  }
});

module.exports = InfragisticsSampleGenerator;