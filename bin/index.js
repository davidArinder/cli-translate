#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils.js");

const usage = "\nUsage: translate <lang_name> sentence to be translated";

const options = yargs
  .usage(usage)
  .option("l", {
    alias: "languages",
    describe: "List all supported languages.",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

const sentence = utils.parseSentence(yargs.argv._);

if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}

if (yargs.argv.l == true || yargs.argv.languages == true) {
  utils.showAll();
  return;
}
