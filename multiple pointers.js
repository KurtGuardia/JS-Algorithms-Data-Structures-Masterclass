//WORKS but not the multiple pointers method
// const countUniqueValues = (arr) => {
//   let sum = 0;
//   arr.forEach((el, i, a) => {
//     if (el !== arr[i - 1]) sum += 1;
//   });
//   console.log(sum);
// };

// const countUniqueValues = (arr) => {
//   if (arr.length === 0) return;
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   // i plus one is the correct length of the unique values inside the modified array
//   return console.log(i + 1);
// };

// countUniqueValues([1, 1, 1, 2]);
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
// countUniqueValues([]);
// countUniqueValues([-2, -1, -1, 0, 1]);

// CHALLENGE

const areThereDuplicates = (...arg) => {
  const orderedArr = arg.sort();
  for (let i = 0; i < orderedArr.length; i++) {
    const el = orderedArr[i];
    if (el === orderedArr[i + 1]) return true;
  }
  return false;
};

// console.log(areThereDuplicates('1', '2', '3', '2'));

// CHALLENGE

const averagePair = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if ((el + arr[i + 1]) / 2 === target) return true;
    return false;
  }
};

averagePair([1, 2, 3], 2.5);
