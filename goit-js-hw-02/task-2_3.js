function findLongestWord(string = '') {
  // Write code under this line
  string = string.split(' ');
  let str = string[0];
  for (let el of string) {
    if (str.length < el.length) {
      str = el;
    }
  }
  return str;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
