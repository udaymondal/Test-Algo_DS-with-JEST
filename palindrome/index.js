// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((charc, i) => {
        return charc === str[str.length - i - 1];
    })
}

module.exports = palindrome;

/* -----------first solution --------------
function palindrome(str) {
    const pal = str.split("").reverse().join('');
    if (str == pal){
        return true;
    }
    else false;
}
*/

/* -----------second solution ---------------
function palindrome(str) {
    const pal = str.split("").reverse().join('');
    return str === pal;
}
*/