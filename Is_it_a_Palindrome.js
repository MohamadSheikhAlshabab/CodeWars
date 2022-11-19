#Solution #1
function isPalindrome(x) {
  let middle,left,right;
  if(x.length%2 !==0){
    if(x.length===1){  
      middle=x[0];
      return (true);
    }else if (x.length>1){ 
      middle = x[Math.floor(x.length/2)];
      left = x.slice(0,x.indexOf(middle));
      right=x.slice(x.length-x.indexOf(middle));
      left=[...left.toLowerCase()].reverse().join(""); 
      if(left.toLowerCase()===right.toLowerCase()){
        return (true);
      }else{
        return (false); 
      }
    }
  }else{
    middle = (x.length)/2;
    left = x.slice(0,x.indexOf(x.charAt(middle)));
    right=x.slice(x.length-x.indexOf(x.charAt(middle)));
    left=[...left.toLowerCase()].reverse().join("");
    if(left.toLowerCase()===right.toLowerCase()){
      return (true);
    }else{
      return (false); 
    };
  };
};

#Solution #2
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

#Solution #3
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

#Solution #4
function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join('');
};
