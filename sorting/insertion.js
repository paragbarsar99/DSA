import { inputNumber } from "./Inputes.js";
import { defaultCompairator, timeTaken } from "./Utils.js";

/**
 * break and make the left most sorted array 
 * as we start the left most portion is already sort
 * example [3,38,44,5,47,15]
 * 3 < 38 yes 
 * [3,38,44,5,47,15]
 * 38 < 44 yes
 * [3,38,44,5,47,15]
 * 44 < 5 no
 * 38 < 5 no
 * 3 < 5 yes insert
 * [3,5,38,44,47,15]
 * 47 < 15 no
 * 44 < 15 no
 * 38 < 15 no
 * 5 < 15 yes insert
 * [3,5,15,38,44,47]
 */
const input = [3,38,44,5,47,15]
function insertionSort(input,compairator){
     if(!input){
        return
     }
 if(typeof compairator !== "function"){
    compairator = defaultCompairator
 }
 let forward= 1;
 
  while(forward < input.length){
     //check to backward 
    if(compairator(input[forward],input[forward-1]) < 1){ 
        //we are already compaired forward with one down index so we can 
        //we can skip on down of backward again.
       let backward = forward - 2
        //  console.log(backward,forward)
        while(backward >= 0){
             if(compairator(input[forward], input[backward]) <1){
                 backward--
                }else{
                //we found that there is not less than values then current backward 
                  break;    
            }
          
        }
     
        //insert
        const [removeElement] = input.splice(forward,1)
        input.splice(backward + 1, 0, removeElement);     
    }
    forward++
  }
 return input
}

/**
 * time complexity 
 * o(n2)
 */

timeTaken(() => console.log(insertionSort(inputNumber,defaultCompairator)))