//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = ([color1, color2]) => {
  // var ten = 10;
  // if(color1 === 'brown' && color2 === 'black'){
  //   return ten;
  // };
  var color1value = COLORS.indexOf(color1);
  var color2value = COLORS.indexOf(color2);
  return Number("" + color1value + color2value);
};


export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];