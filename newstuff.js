// Nice and Decomposed:
function isPrime(number) {
  //let limit = number**(1/2) + 1;
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let choosePrimes = function(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])){
      newArr.push(nums[i]);
    }
  }
  return newArr;
};

function laligatSum(n) {
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) { // if i is a prime,
      sum += i;       // then add it to sum.
    }
  }

  return sum;
}

let nextPrime = function(num) {
  let found = false;

  for (let i = num + 1; !found; i++) {
    if (isPrime(i)) return i;
  }
};
//output laligat sums from 1 to 100
// for (let t = 1; t <= 100; t++) {
//   console.log(t + ": " + laligatSum(t))
// }

// for (let y = 0; y <= 25; y++) {
//   console.log(y + ": " + isPrime(y));
// }
console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
