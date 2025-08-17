//find the condition until the array is end and than swap it with index 
/*
example 
let input = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
let i_2 = [5,4,3,2,1];
start with 
5 > 4
4 > 3
3 > 2
2 > 1
swap at 0,4
5 with 1
[1,4,3,2,5]
4 > 3 
3 > 2
2 > 5 no swap
swap at 1,3
4 with 2 
[1,2,3,4,5]
 3 > 4

 move initial reach to end of array 
*/

// import { inputNumber } from "./Inputes.js";
import { inputNumber, inputString } from "./Inputes.js";
import { defaultCompairator,strComp,swap, timeTaken } from "./Utils.js";
function selectionSort(input,Compairator){
     if(!input){
        return
     }
       if (typeof Compairator !== "function") {
    Compairator = defaultCompairator;
  }

let initial = 0;
let currentMinimum = 0;
let tracker = currentMinimum + 1
     
     while(initial < input.length - 1){
     
        while(tracker < input.length){
            if(Compairator(input[currentMinimum],input[tracker]) >=1){
                currentMinimum = tracker    
            
            }
            tracker++
        }
        //when the initial is already the minimun of complete array
        // no need to swap
        if(initial != currentMinimum){
            console.log(initial,currentMinimum)
            swap(input,initial,currentMinimum)
        }
        initial++
        currentMinimum = initial
        tracker = currentMinimum+1
       
     }
     return input
    }


/**
 * time complexity 
 * o(n2)
 */
timeTaken(() => console.log(selectionSort(inputNumber,defaultCompairator)))