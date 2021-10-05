// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // const limit = {
  //   start: 'a'.charCodeAt(),
  //   end: 'z'.charCodeAt(),
  // }
  // https://leetcode.com/problems/roman-to-integer/
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(shift < -25 || shift > 25 || shift==0) return false;
    if(!encode) {
      shift = shift * -1;
    }
    //convert entire input to lowercase
    const inputLower = input.toLowerCase()
    //convert string to array of letters
    const inputArray = inputLower.split('');
    //convert each letter to ASCII code
    const inputCodes = inputArray.map(letter => letter.charCodeAt())
    //take shift and apply to codes
    const cipher = inputCodes.map(character => {
      if (character > 96 && character < 123) {
        let newChar = character + shift;
        if (newChar > 122) {
          newChar = (newChar % 122) + 96;
        }
        if (newChar < 97) {
          newChar = (newChar + 26);
        }
        return newChar;
      }
      return character;
    })
    const solved = cipher.map(letter => String.fromCharCode(letter))
    const solvedSentence = solved.join('');
    return solvedSentence;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };