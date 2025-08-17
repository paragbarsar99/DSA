export function swap(input,idx1,idx2){
 [input[idx1], input[idx2]] = [input[idx2], input[idx1]];
}
export function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
export function defaultCompairator(a, b) {
  //Ascending order
  if (a - b >= 1) {
    return 1;
  }
  if (a - b < 1) {
    return -1;
  }
  return 0;
}

export function timeTaken(callback){
  console.time('Total time taken')
    // console.log("Start at : ", start)
    callback()
  console.timeEnd('Total time taken')
}