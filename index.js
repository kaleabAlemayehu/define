import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const word = process.argv[2];

const urlDic = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DIC}`;
const urlThe = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.THE}`;
(async (urlDic, urlThe) => {
  try {
    const responseDif = await axios.get(urlDic);
    const responseThe = await axios.get(urlThe);
    Array.from(responseDif.data).forEach((element, index) => {});
    Array.from(responseThe.data).forEach((element, index) => {});
  } catch (e) {
    console.error(e);
  }
})(urlDic, urlThe);
