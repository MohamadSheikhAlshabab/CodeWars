/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

#Solution #1
function countPositivesSumNegatives(input) {
  let arr = [], sum = 0, count = 0;
  if ( input === null || input.length === 0 ){
    return arr;
  }
  [...input].map(a => a > 0 ? count++ : sum += a );
  arr.push( count, sum );
  return arr;
}

#Solution #2
function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

#Solution #3
function countPositivesSumNegatives(a) {
  return !a || !a.length ? [] : [a.filter(e => e > 0).length, a.filter(e => e < 0).reduce((s, c) => s + c, 0)];
}
