/* Problem Statement -
Tests to see if string contains all unique chars. The string to be checked for uniqueness. Returns true if string has only unique chars. False if a duplicate exists. */

// Key point - Startging from str[0] i.e the first character, I have to check all of the rest of the characters for dulplicates. So, I need two loops, the first loop starts at i = 0 and keeping that fixed, in the second loop, I check all of the character starting from i = (0 + 1) upto the the last character.
function isUniqueChars(str) {
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var temp = str[i];
    for (var j = i + 1; j < len - 1; j++) {
      if (temp === str[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = isUniqueChars;

// console.log(isUniqueChars("JavScriapt"));
// console.log(isUniqueChars("Script"));
