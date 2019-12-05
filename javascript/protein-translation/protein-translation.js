//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codons) => {
  var protein = [];
  if (codons === undefined) {
    return protein;
  } else {
    var codons_to_translate = codons.match(/.{1,3}/g);
    for (let i = 0; i < codons_to_translate.length; i++) {
      if (codons_to_translate[i] === 'UAA' || codons_to_translate[i] === 'UAG' || codons_to_translate[i] === 'UGA') {
        break;
      } else if (!CODONS.hasOwnProperty(codons_to_translate[i])) {
        throw 'Invalid codon';
      } else {
        protein.push(CODONS[codons_to_translate[i]]);
        
      };

    };
    return protein;
  }
};


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