/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let upperS = s.toUpperCase();

  if (s.length === 1) {
    return roman[upperS];
  } else {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      if (roman[upperS[i]] < roman[upperS[i + 1]]) {
        sum -= roman[upperS[i]];
      } else {
        sum += roman[upperS[i]];
      }
    }
    return sum;
  }
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
