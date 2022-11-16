function productFib(prod){
  for (let i=0;i<50;i++){
  function fib(i){return i===0?0:i===1?1:fib(i-1)+fib(i-2)}; 

    if (prod === (fib(i)*(fib(i+1)))){ 
      return [fib(i),fib(i+1),true];  
    }
    else if(prod > (fib(i)*(fib(i+1))) && prod < (fib(i+1)*(fib(i+2)))){
     return [fib(i+1),fib(i+2),false];  
    }
  }
}

productFib(103); // [8, 13, false]
productFib(4895); // [55, 89, true]
productFib(5895); // [89, 144, false]
productFib(74049690); // [6765, 10946, true]
productFib(84049690); // [10946, 17711, false]
productFib(193864606); // [10946, 17711, true]
productFib(447577); // [610, 987, false]
productFib(602070); // [610, 987, true]
