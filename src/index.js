const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let exprChunks = [];
  for (let i = 0; i < expr.length; i += 10) {
    exprChunks.push(expr.substring(i, i + 10));
  }
  const decodedMessage = exprChunks.map(symbol => {
    if (symbol === '**********') {
      return ' ';
    }
    let morseCode = '';
    for (let j = 0; j < symbol.length; j += 2) {
      const letter = symbol.substring(j, j + 2);
      if (letter === '10') morseCode += '.';
      else if (letter === '11') morseCode += '-';
    }
    return MORSE_TABLE[morseCode];
  }).join('');

  return decodedMessage;
}

module.exports = {
  decode,
};
