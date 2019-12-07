//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// var protein = [];
export const translate = (codons) => {
  var protein = [];
  if (codons === undefined) {
    return protein;
  } else {
    // var codonsToTranslate = codons.match(/.{1,3}/g);
    // for (let i = 0; i < codonsToTranslate.length; i++) {
    //   if (codonsToTranslate[i] === 'UAA' || codonsToTranslate[i] === 'UAG' || codonsToTranslate[i] === 'UGA') {
    //     break;
    //   } else if (!CODONS.hasOwnProperty(codonsToTranslate[i])) {
    //     throw 'Invalid codon';
    //   } else {
    //     protein.push(CODONS[codonsToTranslate[i]]);
    //   };
    // };
    proteinCalculator(codons);
    return protein;
    // console.log(protein);
  }
};
// var protein = [];
const proteinCalculator = (codons) => {
  
  var codonsToTranslate = codons.match(/.{1,3}/g);
  // console.log(codonsToTranslate);
  for (let i = 0; i < codonsToTranslate.length; i++) {
    // console.log(codonsToTranslate[i]);
    if (codonsToTranslate[i] === 'UAA' || codonsToTranslate[i] === 'UAG' || codonsToTranslate[i] === 'UGA') {
      break;
    } else if (!CODONS.hasOwnProperty(codonsToTranslate[i])) {
      throw 'Invalid codon';
    } else {
      protein.push(CODONS[codonsToTranslate[i]]);
    };
  }
}

  const CODONS = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
  }