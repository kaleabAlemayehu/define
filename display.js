import chalk from "chalk";
const def = chalk.hex("#007acc");
const defBg = chalk.bgHex("#007acc");
const white = chalk.hex("#ffffff");
const whiteBg = chalk.bgHex("#ffffff");

export const printDef = (definition) => {
  console.log(defBg(`${white(definition.wordType)}\n\t`));
  definition.shortDefinition.forEach((element) => {
    console.log(`${def(white(">_"))} ${def(element)}\n`);
  });
};

export const printAnton = (antonym) => {
  if (antonym.anton.length !== 0) {
    console.log(`${chalk.red.bgBlack.underline.bold("\nAntonym")}`);
    antonym.anton.forEach((element, index) => {
      console.log(chalk.red(`>_ ${index + 1}. ${element}\n\n`));
    });
  }
};

export const printSynon = (synonym) => {
  if (synonym.synon.length !== 0) {
    console.log(`${chalk.green.bgBlack.underline.bold("Synonym")}`);
    synonym.synon.forEach((element, index) => {
      console.log(chalk.green(`>_ ${index + 1}. ${element}`));
    });
  }
};
