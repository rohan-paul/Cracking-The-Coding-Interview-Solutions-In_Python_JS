// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

/* Method - 1

(i) https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/
(ii)) https://stackoverflow.com/questions/2131997/checking-if-two-strings-are-permutations-of-each-other/43954079#43954079

A> It is assumed that the characters are stored using 8 bit and there can be 256 possible characters.

B> The key is - We will create a Hashmap with the charCodeAt number of the characters of the first string as keys and the number of occurances of the character as value; So, at the first occurance of the character increment, the value of the key by 1 and at the second occurance increment the value by another 1. Result, for each character, the no of occurance will be equal to that key's value' All the rest of the values of the Hashmap will be filled with zeros.

Then go through the second string and for each character, look up the hash table for that key-value pair. And decrement the value by one, when that key is found the first time, and by another one, if the character occurs twice. If the two strings are permutations then they should have the same unique characters each with the same number of occurrences.

So, none of the second for loop's if condition can have a negative value for a key, if the 2 strings are permutation of each other.

C> Create a hash-table of size 256 (i.e. 256 elements) and initialize all values with 0's.

D> With the for loop, for each character in str1, I am setting its "UTF-16 code unit" value (with charCodeAt method) as the key (incex position) for that hash_table.

E> Compare the occurrence of each character, using the char value as index into an array of counts.

Time Complexity: O(n) .  Space Complexity: O(1) given - 2**16 ints
*/

function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // Create a hash-table array of size 256 (i.e. 256 elements) and initialize all values in this count arrays as 0

  var hash_table_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);

  // In the above, I use Array.apply instead of new Array because, the first one is chainable through Array.prototype.functions, which is what I need to invoke the .map .

  for (var i = 0; i < str1.length; i++) {
    hash_table_array[str1[i].charCodeAt(0)] += 1;
  }

  for (var i = 0; i < str2.length; i++) {
    if ((hash_table_array[str2[i].charCodeAt(0)] -= 1) < 0) {
      return false;
    }
  }
  return true;
};

module.exports = isPermutation;

// console.log(isPermutation('asdf', 'fdsa'));
// console.log(isPermutation('asdf', 'fdsaa'));
// console.log(isPermutation('asdf', 'fdsf'));
