function solution(str){
  let arr = [];
  str
  .split("")
  .map(a => arr.push(a));
  arr
  .reverse()
  return arr.join("");
}

solution('world'); // 'dlrow'
solution('hello'); // 'olleh'
solution(''); // ''
solution('h'); // 'h'
