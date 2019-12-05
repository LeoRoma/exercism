//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (gs) => {
  let dateInSeconds = gs.getTime() / 1000;
  let addGigaSeconds = dateInSeconds += (10 ** 9);
  let newDate = new Date(dateInSeconds * 1000);
  return newDate;
};

