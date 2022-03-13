function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

// console.log(power(2, 4));

function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(0));
