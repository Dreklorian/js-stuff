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

function factor(num) {
  let divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
  return divisors;
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
// Your code here
let primeFactors = function(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && isPrime(i)) {
      factors.push(i);
    }
  }
  return factors;
};


console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(849)); // [2]

let isAntiPrime = function(num) {
  let test = factor(num).length;
  for (let i = 1; i < num; i++) {
    if (factor(i).length > test) {
      return false;
    }
  }
  return true;
};

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false

let vowelCount = function(word) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
};

function mostVowels(sentence) {
  let words = sentence.split(" ");
  let highest = 0;
  for (let i = 0; i < words.length; i++) {
    if (vowelCount(words[i]) > highest) {
      highest = i;
    }
  }
  return words[highest];
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("A serious test of the mostVowEls function"));
console.log(mostVowels("To be or not, to be"));

function allElseEqual(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  half = sum / 2;
  if (arr.includes(half)) {
    return half;
  }
  return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
console.log(typeof allElseEqual);
console.log(typeof vowelCount);
let x = null;
console.log(typeof x);

function returnsWhat() {

}
console.log(returnsWhat());
