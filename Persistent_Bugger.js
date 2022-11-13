function persistence(num) {
  let i=0
  while(`${num}`.length !== 1){
    num=`${num}`.split("").reduce((a,b)=>a*b);
    i++
  }
  return i;
}

persistence(4);      // 0
persistence(25);     // 2
persistence(66);     // 3
persistence(999);    // 4
persistence(2119593);// 2
persistence(6595730);// 1
persistence(9);      // 0
