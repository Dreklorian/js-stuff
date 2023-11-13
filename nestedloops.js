function pairsMaker(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

function pairProduct(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false

function strangeSums(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
console.log(strangeSums([42, 3, -1, -42]));      // 1
console.log(strangeSums([-5, 5]));               // 1
console.log(strangeSums([19, 6, -3, -20]));      // 0
console.log(strangeSums([9]));                   // 0

// doesn't work in node : let name = prompt("What's your name?");

function twoDimensionalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

let arr1 = [
  [1, 3],
  [-4, 7, 10],
  [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
  [],
  [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

function twoDimensionalProduct(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      product *= array[i][j];
    }
  }
  return product;
}

let arr3 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr3)); // 360

let arr4 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr4)); // 88

function maxInMatrix(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}


matrix = [[11,  2,-99],
          [20, 19, 10],
          [47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72

function maxColumn(matrix) {
  let returnArray = matrix[0];
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > returnArray[col]) {
        returnArray[col] = matrix[row][col];
      }
    }
  }
  return returnArray;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]

function zip(arr1, arr2) {
  let zipped = [];
  for (let i = 0; i < arr1.length; i++) {
    zipped.push([arr1[i], arr2[i]]);
  }
  return zipped;
}

console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

let zanyZip = function(arr1, arr2) {
  let zipped = [];
  let longest = arr1.length;
  if (arr2.length > longest) longest = arr2.length;

  for (let i = 0; i < longest; i++) {
    if (arr1[i] === undefined) arr1[i] = null;
    if (arr2[i] === undefined) arr2[i] = null;
    zipped.push([arr1[i], arr2[i]]);
  }
  return zipped;
}

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

function matrixAddition(matrix1, matrix2) {
  let addedMatrix = [];
  for (let row = 0; row < matrix1.length; row++) {
    let subArray = [];
    for (let col = 0; col < matrix1[row].length; col++) {
      subArray.push(matrix1[row][col] + matrix2[row][col]);
    }
    addedMatrix.push(subArray);
  }
  return addedMatrix;
}

let matrixA = [[2,5], [4,7]]
let matrixB = [[9,1], [3,0]]
let matrixC = [[-1,0], [0,-1]]
let matrixD = [[2, -5], [7, 10], [0, 1]]
let matrixE = [[0 , 0], [12, 4], [6,  3]]

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
