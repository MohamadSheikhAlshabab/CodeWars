function createPhoneNumber(numbers){
  let text = numbers.join("");
  let numRe = /(\d{3})(\d{3})(\d{4})/;
  let phone ='($1) $2-$3';
  return text.replace(numRe, phone);
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // (123) 456-7890

createPhoneNumber([0,7,8,5,9,5,4,9,1,6]); // (078) 595-4916
