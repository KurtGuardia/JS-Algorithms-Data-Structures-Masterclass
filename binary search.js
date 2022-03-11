function binarySearch(arr, target) {
  let initial = 0;
  let last = arr.length - 1;
  let middle = Math.floor((initial + last) / 2);

  while (arr[middle] !== target && initial <= last) {
    if (target < arr[middle]) last = middle - 1;
    else initial = middle + 1;
    middle = Math.floor((initial + last) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
