#! /usr/bin/env node
'use strict';

const { join } = require('path');
const program = require('../lib/utils/commander');

const gulpfile = join(__dirname, '..', 'gulpfile.js');

program
  .name('staticline dev')

  .description('Start the development server')

  .option('--gulpfile [file]', 'set gulpfile')
  .option('--cwd [path]', 'set current working directory')

  .parse(process.argv);

if ( ! program.gulpfile) process.argv.push('--gulpfile', gulpfile);
if ( ! program.cwd) process.argv.push('--cwd', process.cwd());

process.argv.push('dev');

require('gulp/bin/gulp');
