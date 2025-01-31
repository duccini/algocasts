// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverse = n.toString().split("").reverse().join("");

  return parseInt(reverse) * Math.sign(n);
}

module.exports = reverseInt;

/**
 *  String(x) VS toString(x)
 *  Number(x) VS parseInt(x)
 */

// GUI SOLUTION

// function reverseInt(n) {
//   const positive = n >= 0;

//   const str = positive ? String(n) : String(n * -1);

//   let reverse = "";

//   for (char of str) {
//     if (char) {
//       reverse = char + reverse;
//     }
//   }

//   return positive ? Number(reverse) : Number(reverse) * -1;
// }
