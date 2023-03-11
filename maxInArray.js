function maxInArray(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const heights = [150, 135, 140, 160, 120, 110, 190, 165, 177, 130];
const maxHeight = maxInArray(heights);
console.log("Tallest person is:", maxHeight);

// Home work: write a function to get the lowest in an array
function minInArray(number) {
  let lowest = number[0];
  for (j = 0; j < number.length; j++) {
    const manHeightsIndex = j;
    const manHeightsElemnt = number[manHeightsIndex];
    if (manHeightsElemnt < lowest) {
      lowest = manHeightsElemnt;
    }
  }
  return lowest;
}

const manHeights = [150, 135, 140, 160, 120, 110, 190, 165, 177, 130];
const minNumber = minInArray(manHeights);
console.log("Smalest person is:", minNumber);
