function squareSum(numbers){
  return ([...numbers].map((a)=>a**2).reduce((e,b)=>e+b),0);
}

squareSum([1,2]); // 1+4=5
squareSum([1,2,3]); // 1+4+9=14
squareSum([2,3,2]); // 4+4+9=17
squareSum([2,3,2,10,11,12,13,15]); // 4+4+9=17+100+121+144+169+225
