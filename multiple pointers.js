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
  const double = target * 2;

  arr.push(target);
  const sorted = arr.sort((a, b) => a - b);
  const middle = sorted.findIndex((el) => el === target);

  const bottom = {};
  const bottomArr = sorted.slice(0, middle);

  for (const key of bottomArr) {
    bottom[key] = '';
  }

  let i = 0;

  for (let j = 1; j <= arr.length; j++) {
    const el = arr[arr.length - j];
    let pair = double - el;

    if (pair > 0) {
      const missing = (double - (el + arr[i])).toString();
      return bottom.hasOwnProperty(missing);
    }
  }
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
