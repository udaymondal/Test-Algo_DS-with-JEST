// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, charc) => {
            return charc + reversed;
        }, '')
}

module.exports = reverse;


/* ----------first solution---------------
function reverse(str) {
  return str.split("").reverse().join("");   // read documentation
}
*/

/* ----------second solution---------------
let reversed = '';
    for(let charc of str){
        reversed = charc + reversed;
    }
    return reversed;
*/