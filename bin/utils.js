const languages = require("./languageMap");

const usage = "\nUsage: translate <lang_name> sentence to be translated";

const parseSentence = (words) => {
  let sentence = "";
  for (let i = 0; i < words.length; i++) {
    sentence += words[i] + " ";
  }

  return sentence;
};

const showHelp = () => {
  console.log(usage);
  console.log("\nOptions:\r");
  console.log(
    "\t--version\t " + "    " + "Showversion number." + "\t\t" + "[boolean]\r"
  );
  console.log(
    "    -l, --languages\t" +
      "      " +
      "List all languages." +
      "\t\t" +
      "[boolean]\r"
  );
  console.log("\t--help\t\t      " + "Show help." + "\t\t\t" + "[boolean]\n");
};

const showAll = () => {
  console.log(chalk.magenta.bold("\nLanguage Name\t\tISO-639-1 Code\n"));

  for (let [key, value] of languages) {
    console.log(key + "\\t\\t" + value + "\\n");
  }
};

const parseLanguage = (language) => {
  if (language.length === 2) {
    return language;
  } else if (languages.has(language)) {
    return languages.get(language);
  } else {
    console.error("Language not supported!");
    return;
  }
};

module.exports = {
  parseSentence,
  showHelp,
  showAll,
  parseLanguage,
};
