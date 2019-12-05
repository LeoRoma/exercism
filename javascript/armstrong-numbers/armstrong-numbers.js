//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (input) => {
  var result = 0;
  var numberToSum = [];
  var numberToMol = input.toString();
  for (let i = 0; i < numberToMol.length; i++){
    numberToSum.push(numberToMol[i] ** numberToMol.length);
  };
  for (let i = 0; i < numberToSum.length; i++){
    result += numberToSum[i];
  };
  if (result === input) {
    return true;
  }else{
    return false;
  };
};
