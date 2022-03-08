// Pretty similar to professor's solution but does not work
const validAnagram = (a, b) => {
  if (a === '' && b === '') return true;
  if (a.length !== b.length) return false;

  const frequencyA = {};
  const frequencyB = {};

  for (const i of a) {
    frequencyA[i] = (frequencyA[i] || 0) + 1;
  }

  for (const i of b) {
    frequencyB[i] = (frequencyB[i] || 0) + 1;
  }

  for (const key in frequencyB) {
    if (!frequencyA[key]) return false;
    else frequencyA[key] -= 1;
  }
  console.log(frequencyA);
  console.log(frequencyB);
  return true;
};

console.log(validAnagram('aaz', 'zza'));

// Another:
/*
function validAnagram(str1, str2){
  if(str1.length !== str2.length){
      return false;
  }
  var strArr1 = str1.split("").sort();
  var strArr2 = str2.split("").sort();
  
  var sortedStr1 = strArr1.join("");
  var sortedStr2 = strArr2.join("");
  
  return sortedStr1 === sortedStr2;
}*/
