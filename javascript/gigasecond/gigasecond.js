//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (gs) => {
  const gigaseconds = 10 ** 9;
  var dateInSeconds = gs.getMilliseconds();
  var newDate = new Date(dateInSeconds += gigaseconds);
  return newDate;
};

