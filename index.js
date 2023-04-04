import axios from "axios";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";
import { printAnton, printDef, printSynon } from "./display.js";
import { Definition, Synonym, Antonym } from "./fields.js";

// getting absolute path to the module
const __filename = fileURLToPath(import.meta.url);
// getting directory path
const __dirname = path.dirname(__filename);
// resolving path to .env file
dotenv.config({ path: path.resolve(__dirname, ".env") });

// storing arguments
const word = process.argv[2];
const NUM = parseInt(process.argv[3]) || 1;

// API end points
const urlDic = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DIC}`;
const urlThe = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.THE}`;

// IIFE called when the command is executed
(async (urlDic, urlThe, printDef, printAnton, printSynon) => {
  try {
    const responseDif = await axios.get(urlDic);
    const responseThe = await axios.get(urlThe);
    if (responseDif) {
      Array.from(responseDif.data).forEach((element, index) => {
        if (index < NUM && NUM >= 0) {
          const shortDefinition = new Definition(element.fl, element.shortdef);
          printDef(shortDefinition);
        }
      });
    }
    if (responseThe) {
      responseThe.data.forEach((element, index) => {
        if (index < NUM && NUM >= 0) {
          if (element.meta.hasOwnProperty("syns")) {
            const synon = new Synonym(element.meta.syns);
            printSynon(synon);
          }
          if (element.meta.hasOwnProperty("ants")) {
            const anton = new Antonym(element.meta.ants);
            printAnton(anton);
          }
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
})(urlDic, urlThe, printDef, printAnton, printSynon);
