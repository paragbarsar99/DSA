export let inputString = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
export function randomArray(x, min = 1, max = 100) {
  return Array.from({ length: x }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
}


export let inputNumber = randomArray(10) 