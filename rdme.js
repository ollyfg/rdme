#! /usr/bin/env node
const parseArgs = require('minimist')(process.argv.slice(2));

require('./cli')(parseArgs._[0], parseArgs._.slice(1), parseArgs)
  .then(() => process.exit())
  .catch(err => {
    if (err) console.error(err);
    return process.exit(1);
  });
