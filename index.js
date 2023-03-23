import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { printDef } from "./display.js";
import { Definition, Synonym, Antonym } from "./fields.js";

dotenv.config();

const word = process.argv[2];
const NUM = parseInt(process.argv[3]) || 1;

const urlDic = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DIC}`;
const urlThe = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.THE}`;

// IIFE called when the command is executed
(async (urlDic, urlThe, printDef) => {
  try {
    const responseDif = await axios.get(urlDic);
    const responseThe = await axios.get(urlThe);

    responseDif.data.forEach((element, index) => {
      if (index < NUM && NUM >= 0) {
        const shortDefinition = new Definition(element.fl, element.shortdef);
        printDef(shortDefinition);
      }

      // console.log(`the short definition: ${JSON.stringify(shortDefinition)}`);
      //   fs.writeFile(
      //     `${path.resolve("./")}/define${index}.json`,
      //     JSON.stringify(element),
      //     (err) => {
      //       if (err) {
      //         console.log(err);
      //       }
      //     }
      //   );
    });
    responseThe.data.forEach((element, index) => {
      if (index < NUM && NUM >= 0) {
        const synon = new Synonym(JSON.stringify(element.meta.syns));
        const anton = new Antonym(JSON.stringify(element.meta.ants));
      }
      // fs.writeFile(
      //   `${path.resolve("./")}/syns${index}.json`,
      //   JSON.stringify(...element.meta.syns),
      //   (err) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //   }
      // );
    });
  } catch (e) {
    console.error(e);
  }
})(urlDic, urlThe, printDef);
