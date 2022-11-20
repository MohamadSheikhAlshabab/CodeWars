/*


According to Wikipedia, a palindrome is "a word, phrase, number, or other sequence of characters which reads the same backward or forward." Examples of palindromes include "racecar", "tacocat", and "123454321".

Capitalization, punctuation, and word dividers will be ignored when checking if a string is a palindrome. For example, "Was it a car or a cat I saw?" is a valid palindrome in context of this Kata.

All requirements from definition should be fulfilled.
If the given string is a palindrome, return true.
If not, or in case of null input (None for Python) return false.

Exaples:
Testing for race car
Testing for Amor, Roma
Testing for aaaaza
Testing for   No 'x' in Nixon 
Testing for Are we not pure? 'No sir!' Panama`s moody Noriega brags. 'It is garbage!' Irony dooms a man; a prisoner up to new era.
Testing for qwerty!@#
Testing for 1234321
Testing for 12 3321
Testing for 123521
Testing for Salta Lenin el atlas
Testing for Anita lava la tina
Testing for oso
Testing for Asa
Testing for null
*/
function isPalindrome(str) {
  if(null===str || undefined===str){ 
    return false;
  }else{ 
    str=str.replace(/([^a-zA-Z0-9])/g,"");
    return ([...str].reverse().join("").toLowerCase()==str.toLowerCase());
  }
}

isPalindrome(null); // false
isPalindrome("race car"); // true
isPalindrome("Amor, Roma"); // true
isPalindrome("123521"); // false
