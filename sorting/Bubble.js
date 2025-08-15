//bubble sort
//bubble the bigeest number to end of array
//example input [4,5,3,2,1]
/**
 *  output [1,2,3,4,5]
 *
 * start with index 0 comapre this with index 1 check if bigger thean swap the values
 * swap until i is less then j
 * 4 > 5 no swap
 * 5 > 3 swap
 * 5 > 2 swap
 * 5 > 1 swap
 */
let input = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
let sortet = [1, 2, 3, 4, 5];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
function defaultCompairator(a, b) {
  //Ascending order
  if (a - b >= 1) {
    return 1;
  }
  if (a - b < 1) {
    return -1;
  }
  return 0;
}
function bubbleSort(input, Compairator) {
  if (!input) {
    return;
  }
  if (typeof Compairator !== "function") {
    Compairator = defaultCompairator;
  }

  let i = 0;
  let j = 0;
  let boundry = input.length - 1;
  //problem 1 how to find restart the loop again
  while (i < input.length - 1) {
    let noSwaped = true;

    while (j < boundry) {
      if (Compairator(input[j], input[j + 1]) >= 1) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
        noSwaped = false;
      }
      j++;
    }
    if (noSwaped) {
      return input;
    }
    i++;
    j = 0;
    boundry--;
  }

  return input;
}
// console.log(input);
// const res = ([input[0], input[1]] = [input[1], input[0]]);
console.log(bubbleSort(input, strComp));
// console.log(input);
