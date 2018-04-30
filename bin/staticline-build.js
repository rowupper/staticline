#!/usr/bin/env node
'use strict';

const { join } = require('path');
const program = require('../lib/utils/commander');

const gulpfile = join(__dirname, '..', 'gulpfile.js');

program
  .name('staticline build')

  .description('Build project distribution')

  .option('--gulpfile [file]', 'set gulpfile')
  .option('--cwd [path]', 'set current working directory')
  .option('--env [value]', 'set the environment', 'production')

  .parse(process.argv);

if ( ! program.gulpfile) process.argv.push('--gulpfile', gulpfile);
if ( ! program.cwd) process.argv.push('--cwd', process.cwd());

process.argv.push('build');

process.env.NODE_ENV = program.env;

require('gulp/bin/gulp');
