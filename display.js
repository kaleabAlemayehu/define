import chalk from "chalk";

export const printDef = (definition) => {
  console.log(`${chalk.bold.blue.bgWhite(definition.wordType)}\n\t`);
  definition.shortDefinition.forEach((element) => {
    console.log(
      `${chalk.bgRed.bold.black("#")} ${chalk.bgBlue.white(element)}\n`
    );
  });
};

// export const printAnton = (antonym) => {
//   console.log(`${antonyms}`);
// };
