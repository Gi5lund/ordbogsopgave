"use strict";
let globalArrayOfWords = [];
const reponse=await fetch("../data/ddo_fullforms_2023-10-11.csv");
const data=await reponse.text();

globalArrayOfWords = data.split("\n").map(line => {
    const parts = line.split("\t");
    return {
      variant: parts[0],
      headword: parts[1],
      homograph: parts[2],
      partofspeech: parts[3],
      id: parts[4]
    }
  });
  console.log(globalArrayOfWords.length);