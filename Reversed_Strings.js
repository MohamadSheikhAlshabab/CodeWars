//soultion #1:
function solution(str){
  let arr = [];
  str
  .split("")
  .map(a => arr.push(a));
  arr
  .reverse()
  return arr.join("");
}

//soultion #2:
function solution(str){
  return str.split('').reverse().join('');  
}

//soultion #3:
const solution = str => [...str].reverse().join('');

solution('world'); // 'dlrow'
solution('hello'); // 'olleh'
solution(''); // ''
solution('h'); // 'h'
