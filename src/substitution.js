// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // const key = { 
  //   a: 1, b: 2, c: 3, d: 4, e: 5, 
  //   f: 6, g: 7, h: 8, i: 9, j: 10,
  //   k: 11, l: 12, m: 13, n: 14, o: 15, 
  //   p: 16, q: 17, r: 18, s: 19, t: 20, 
  //   u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 
  // }
  const alphabetReference = 'abcdefghijklmnopqrstuvwxyz';

  
  const key = alphabetReference.split('').reduce((acc, item) => 
    ({...acc, [item]: null}), {})
  // console.log(makeAnObject)

  function keyGenerator(suppliedKey) {
    let i = 0;
    for (letter of alphabetReference) {
      key[letter] = suppliedKey[i];
      i++;
    }
    return key;
  }

  function decodeKeyGenerator(suppliedKey) {
   
    let decodeKey = Object.keys(suppliedKey).reduce((acc, key) => {
      acc[suppliedKey[key]] = key;
      return acc;
    }, {});
    return decodeKey;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    const alphabetCheck = [...new Set(alphabet.split(''))];
    if (alphabetCheck.length !== 26) return false;
    let newKey = keyGenerator(alphabet);
    if (!encode) {
      newKey = decodeKeyGenerator(newKey);
    }


    // found this at http://people.hsc.edu/faculty-staff/tomv/Coms161/SubstCipherJavaScript.htm
    // const permuted = alphabet;
    // input = input.toLowerCase();
    // let i = 0;
    // let result = "";
    // while (i < input.length) {
    //   let index = alphabetReference.indexOf(input.charAt(i));
    //   result = result + permuted.charAt(index);
    //   i++;
    // }
    // return result;
     

    // read in alphabet
    // store index locations of letters as values with the letters as keys?
    // For encoding, I need to h
    
    // input = input.split('')
    // if (encode) {
    //   let scrambled = input.split('').map(letter => newKey[letter] || ' ').join('');
    //   return scrambled;
    // }    
    // newKey = decodeKeyGenerator(newKey);
    let unscrambled = input.split('').map(letter => newKey[letter] || ' ')
      .join('');
    return unscrambled;
    
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
