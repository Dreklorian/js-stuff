
function addToArray(location, element, arr) {
  if (location === "FRONT") {
    arr.unshift(element);
  } else if (location === "BACK") {
    arr.push(element);
  } else {
    console.log("ERROR");
  }

}

testArray = [1,2,3]

addToArray("FRONT", 0, testArray)
console.log(testArray) // [0,1,2,3]

addToArray("BACK", 4, testArray)
console.log(testArray) // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [0,1,2,3,4]

let range = function(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

let evenNumbers = function(max) {
  let arr = [];
  for (let i = 2; i < max; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
/* 5
6
7
8
9 */


logBetweenStepper(-10, 15, 5)  // prints out:
/* -10
-5
0
5
10
15 */

let factorsOf = function(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]

function fizzBuzz(max) {
  let factors = [];
  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) ||
       (i % 5 === 0 && i % 3 !== 0)) {
        factors.push(i);
    }
  }
  return factors;
}
console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

function pitPat(max) {
  let factors = [];
  for (let i = 1; i <= max; i++) {
    if ((i % 4 === 0 && i % 6 !== 0) ||
       (i % 6 === 0 && i % 4 !== 0)) {
        factors.push(i);
    }
  }
  return factors;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

let doubleSequence = function(base, length) {
  let arr = [];
  if (length === 0) return arr;
  arr.push(base);
  for (let i = 1; i < length; i++) {
    arr.push(arr[arr.length - 1] * 2);
  }
  return arr;
};

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]


function tripleSequence(start, length) {
  let seq = [start];
  for (let i = 1; i <length; i++) {
    seq.push(seq[seq.length - 1] * 3);
  }
  return seq;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

let unique = function(array) {
  let uniques = [];
  for (let i = 0; i < array.length; i++ ) {
    if (!uniques.includes(array[i])) {
      uniques.push(array[i]);
    }
  }
  return uniques;
};

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

let yeller = function(words) {
  let yelled = [];
  for (let i = 0; i < words.length; i++) {
    yelled.push(words[i].toUpperCase() + "!");
  }
  return yelled;
};

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

let tripler = function(nums) {
  let trips = [];
  for (let i  = 0; i < nums.length; i++) {
    trips.push(nums[i] * 3);
  }
  return trips;
};

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

let longWords = function(words) {
let longs = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    longs.push(words[i]);
  }
}
return longs;
};

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

let chooseyEndings = function(words, suffix) {
  if (!Array.isArray(words)) return [];
  let chosen = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith(suffix)) {
      chosen.push(words[i]);
    }
  }
  return chosen;
};

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]

let commonFactors = function(num1, num2) {
  let factors = [];
    for (let i = 0; i <= num1; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        factors.push(i);
      }
    }
  return factors;
};

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]

let adjacentSums = function(nums) {
  let sums = [];
    for (let i = 0; i < nums.length - 1; i++) {
      sums.push(nums[i] + nums[i + 1]);
    }
  return sums;
};

console.log(adjacentSums([3, 8, 7, 1]));        // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));    // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));          // [-1, 0]
