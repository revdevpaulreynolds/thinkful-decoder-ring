// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // My first pass I hard coded the key, but then realized it was unnecessary
  // const key = { 
  //   a: 1, b: 2, c: 3, d: 4, e: 5, 
  //   f: 6, g: 7, h: 8, i: 9, j: 10,
  //   k: 11, l: 12, m: 13, n: 14, o: 15, 
  //   p: 16, q: 17, r: 18, s: 19, t: 20, 
  //   u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 
  // }
  const alphabetReference = 'abcdefghijklmnopqrstuvwxyz';

  // This turns the reference alphabet into an object where the key is the letter
  const key = alphabetReference.split('').reduce((acc, item) => 
    ({...acc, [item]: null}), {})

  // This populates the encoding key with the values from the scrambled alphabet
  const keyGenerator = suppliedKey => {
    let i = 0;
    for (letter of alphabetReference) {
      key[letter] = suppliedKey[i];
      i++;
    }
    return key;
  }

  // This flips the keys and values of the encoding key
  const decodeKeyGenerator = suppliedKey => {
    let decodeKey = Object.keys(suppliedKey).reduce((acc, key) => {
      acc[suppliedKey[key]] = key;
      return acc;
    }, {});
    return decodeKey;
  }

  const substitution = (input, alphabet, encode = true) => {
    if (!alphabet || alphabet.length !== 26) return false;
    const alphabetCheck = [...new Set(alphabet.split(''))];
    if (alphabetCheck.length !== 26) return false;
    let key = keyGenerator(alphabet);
    if (!encode) {
      key = decodeKeyGenerator(key);
    }

    let unscrambled = input.split('').map(letter => key[letter] || ' ')
    .join('');
    return unscrambled;

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
    
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
