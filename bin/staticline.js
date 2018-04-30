#!/usr/bin/env node
'use strict';

const program = require('../lib/utils/commander');
const { version } = require('../package.json');

program
  .version(version, '-v, --version')

  .usage('<command> [options]')

  .command('dev', 'start the development server')
  .command('build', 'build project distribution')
  .command('sw <dir>', 'build service worker file')

  .parse(process.argv);

if ( ! process.argv.slice(2).length) program.outputHelp();
