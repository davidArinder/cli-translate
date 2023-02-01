#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils.js");
const translate = require(); // get a translation api

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

if (yargs.argv._[0]) {
  const language = yargs.argv._[0].toLowerCase();
  language = utils.parseLanguage(language);
}

if (sentence === "") {
  console.error("\nNo sentence was entered.");
  console.log("Enter translate --help to get started.\n");
  return;
}

// translate(sentence, { to: language })
//   .then((res) => {
//     console.log("\n" + "\n" + res.text + "\n" + "\n");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
