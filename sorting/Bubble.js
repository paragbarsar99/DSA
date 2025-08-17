//bubble sort
//bubble the bigeest number to end of array
//example input [4,5,3,2,1]

import { inputNumber } from "./Inputes.js";
import { defaultCompairator, swap,strComp, timeTaken } from "./Utils.js";

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
        swap(input, j, j + 1)
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


/**
 * time complexity 
 * o(n2)
 */
// console.log(input);
// const res = ([input[0], input[1]] = [input[1], input[0]]);
timeTaken(() => console.log(bubbleSort(inputNumber,defaultCompairator)))// console.log(input);
