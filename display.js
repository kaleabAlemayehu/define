import chalk from "chalk";

export const printDef = (definition) => {
  console.log(`${chalk.bold.blue.bgWhite(definition.wordType)}\n\t`);
  definition.shortDefinition.forEach((element) => {
    console.log(
      `${chalk.bgGray.bold.black(">_")} ${chalk.bgBlue.white(element)}\n`
    );
  });
};

export const printAnton = (antonym) => {
  if (antonym.anton.length !== 0) {
    console.log(`${chalk.red.bgBlack.underline.bold("\nAntonym")}`);
    antonym.anton.forEach((element, index) => {
      console.log(chalk.red(`>_ ${index + 1}. ${element}`));
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
