"use strict";

let typewrittenText; //text with the typewriter effect
let savedText; //text that will be written
let textLength; //length of the text
let delay; //random delay
let i = 0; //iterator

document.addEventListener("DOMContentLoaded", init);

//initialize
function init() {
  typewrittenText = document.querySelector(".typewritten");
  savedText = typewrittenText.textContent;
  textLength = savedText.length;
  //console.log(`savedText = ${savedText},`, `datatype: ${typeof savedText}`);
  //console.log(`textLength: ${textLength}`);

  typewrittenText.textContent = "";
  writeText();
}

//typewriter effect
function writeText() {
  delay = Math.random() * 120 + 80; //random number between 80ms to 200ms
  if (i < textLength) {
    setTimeout(() => {
      typewrittenText.textContent += savedText.charAt([i]);
      i++;
      writeText();
    }, delay);
  }
}
