function DNAStrand(dna){
    let arr =[];
    [...dna].map(el =>{
    el = el.toUpperCase();
    el =="A" ?
    arr.push(el = "T") :
    el ==="T" ?
    arr.push(el = "A") :
    el ==="G" ?
    arr.push(el = "C") :
    el ==="C" ?
    arr.push(el = "G") :
    el = el;
  })
  return arr.join("");
   
}

DNAStrand("AAA"); // TTT
DNAStrand("TTT"); // AAA
DNAStrand("CCC"); // GGG
DNAStrand("GGG"); // CCC
DNAStrand("ggg"); // CCC

DNAStrand("ACGT"); // TGCA
DNAStrand("TATG"); // ATAC
DNAStrand("GGTT"); // CCAA
DNAStrand("CGTC"); // GCAG
DNAStrand("GCAG"); // CGTC
