function findNextSquare(sq) {
  let sqrt = sq ** 0.5;
  return sqrt === parseInt(sqrt) ? ++sqrt * sqrt : -1;
}

findNextSquare(121);            // 144
findNextSquare(625);            // 676
findNextSquare(319225);         // 320356
findNextSquare(15241383936);    // 15241630849
findNextSquare(155);            // -1
findNextSquare(342786627);      // -1
