"use strict";

const textToAscii = (text) => {
  let asciiEncrypt = [];
  for (let i = 0; i < text.length; ) {
    if (text.charAt(i) === " ") {
      asciiEncrypt.push(" ");
    } else {
      asciiEncrypt.push(text.charCodeAt(i));
    }
    i++;
  }
  console.log(asciiEncrypt.join(""));
};

textToAscii("Hola mundo");
