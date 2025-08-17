import { inputNumber } from "./Inputes.js"
import { timeTaken } from "./Utils.js"

/**
 * break the array till single element.
 * then compare with sibling element. 
 * then start the merging.
 * exmaple input 
 *         [2,6,0,10,50,1]
 *  [2,6,0,10]             [50,1]
 * [2,6],[0,10]           [50,1]
 * [2],[6],[0],[10]         [50],[1]
 * compare siblings     compare siblings 
    2 < 6       
    [2,6] [0][10]           
    2 < 0                   50 < 1 
    [0,2,6][10]            [1,50] []  
     0 < 10
     2 < 10
     6 < 10
        [0,2,6,10]          [1,50]
                0 < 1
                0 < 50
                2 < 1 no
            [0,1,2,6,10] [50]
                 2 < 50
                 6 < 50
                 10 < 50
              [0,1,2,6,10,50] 
 */

              /**
               *  // console.log(leftPart,rightPart)
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
     while(leftIndex < leftPart.length && rightIndex < rightPart.length){
      //found the condition
      if(rightPart[rightIndex] < leftPart[leftIndex]){
        console.log(rightPart[rightIndex])
        result.push(rightPart[rightIndex])
        rightIndex++
    }else{
            console.log(rightPart[rightIndex])
            leftIndex++
        }    
    } 
    // console.log(rightPart,rightIndex, " rightIndex")
    // //if the right part is bigger than left part than just combine this.
   const sorted  = result.concat(rightPart.slice(rightIndex,rightPart.length))
    return sorted
               */
/*
 *  while(i < leftPart.length){
        while(j < rightPart.length){
            //found the condition
             if(rightPart[j] < leftPart[i]){
                 const removeElement = removeItem(rightPart,j)
                 insert(leftPart,i-1,removeElement)
                 i++
             }else{
                j++
             }
        }
        i++
        j=0
    } 
   const removeElement = removeItem(rightPart,j)
  insert(leftPart,i-1,removeElement)


   //console.log(leftPart,rightPart)
    //increase the i and j if found the match
    //Else keep increasing j till end 
    //also keep increasing i till end.
    console.log(leftPart,rightPart,leftIndex,rightIndex,result)
    if(!leftPart){
     return result
     }
     if(!rightPart){
        return result
     }
    if(leftIndex < leftPart.length){
        return result.push(rightPart.slice(rightIndex,rightPart.length))
    }

    if(rightIndex < rightPart.length){
        return result.push(...leftPart?.slice(leftIndex,leftPart.length))
    }
    console.log(rightPart)
   if(rightPart[rightIndex] < leftPart[leftIndex]){
      result.push(rightPart[rightIndex])
      leftIndex++
    }else{
        rightIndex++
    }
   
    //if the right part is bigger than left part than just combine this.
    //const sorted = leftPart.concat(rightPart)
    return combine(leftPart,rightPart,leftIndex,rightIndex,result)
 */

const input =  [2,6,0,10,50,1]
    
const round = (input) => Math.floor(input)

const removeItem = (input,deleteIndex) =>{
     const [removeElement] = input.splice(deleteIndex,1)
     return removeElement
}

const insert = (input,insertIndex,element) =>{
        input.splice(insertIndex + 1, 0, element);   
}

function combine(leftPart,rightPart){
    let j = 0;
    let i = 0;
    let result = []
    // console.log(leftPart,rightPart)
    while(i < leftPart.length && j < rightPart.length){
            //found the condition
             if(rightPart[j] < leftPart[i]){
                 result.push(rightPart[j])
                  j++
             }else{
                result.push(leftPart[i])
                 i++
             }
      
    } 
    // console.log(result, " result")
    const remaningI = leftPart.slice(i,leftPart.length)
    const remaningJ = rightPart.slice(j,rightPart.length)
    const sorted =  [...result,...remaningI,...remaningJ]
    return sorted
} 

function Break(input){ 
if (!Array.isArray(input)) {
    return array;
}
 const left = 0;
 const right = input.length - 1
 const middle = round((left+right)/2)
 //base condition
  if (input.length === 1 || input.length === 0) {
    return input;
  }

 const leftPart = input.slice(left,middle+1)
 const rightPart  = input.slice(middle+1,right + 1)
 
 return combine(Break(leftPart),Break(rightPart))
}


function merge(input) { 
 if(!input){
    return;
 }
//  console.log(input," BeforeBrokenArray")
 const brokenArray = Break(input)
 console.log(input.length < 20 ? `${brokenArray} sorted` : "Array is big to print" )
}
timeTaken(() =>merge(input))
