"use strict";

let typewrittenText; //text with the typewriter effect
let savedText; //text that will be written
let textLength; //length of the text
let delay; //random delay
let i = 0; //iterator

let randomSound; //choose a random sound effect
let soundList;

document.addEventListener("DOMContentLoaded", init);

//initialize
function init() {
  typewrittenText = document.querySelector(".typewritten");
  savedText = typewrittenText.textContent;
  textLength = savedText.length;
  soundList = document.getElementById("sounds");
  //console.log(`savedText = ${savedText},`, `datatype: ${typeof savedText}`);
  //console.log(`textLength: ${textLength}`);

  typewrittenText.textContent = "";
  writeText();
}

//typewriter effect
function writeText() {
  delay = Math.random() * 100 + 80; //random number between 80ms to 180ms
  randomSound = Math.floor(Math.random() * 2) + 1; //1 or 2
  if (i < textLength) {
    setTimeout(() => {
      typewrittenText.textContent += savedText.charAt([i]);

      switch (savedText.charAt([i])) {
        case " ":
          let spaceSound = document.createElement("audio");
          spaceSound.setAttribute("src", `assets/typespace.mp3`);
          soundList.appendChild(spaceSound);
          spaceSound.play();
          spaceSound.addEventListener("ended", () => {
            spaceSound.remove();
          });
          break;

        default:
          let keySound = document.createElement("audio");
          keySound.setAttribute("src", `assets/typekey${randomSound}.mp3`);
          soundList.appendChild(keySound);
          keySound.play();
          keySound.addEventListener("ended", () => {
            keySound.remove();
          });
          break;
      }

      i++;

      writeText();
    }, delay);
  }
}
