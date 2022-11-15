// Solution #1:
function numberToString(num) {
  return num.toString();
}

// Solution #2:
function numberToString(num) {
  return String(num);
}

// Solution #3:
function numberToString(num) {
  return ''+num;
}

// Solution #4:
function numberToString(num) {
  return JSON.stringify(num);
}

// Solution #5:
const numberToString = num => `${num}`;
