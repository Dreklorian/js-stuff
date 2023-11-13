function isLowestInRow(row, num) {
  for (let i = 0; i < row.length; i++) {
    if (num > row[i]) {
      return false;
    }
  }
  return true;
}

function isHighestInCol(col, num) {
  for (let i = 0; i < col.length; i++) {
    if (num < col[i]) {
      return false;
    }
  }
  return true;
}

function luckyNumbers(matrix) {
  let luckies = [];
  let column = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      let test = matrix[r][c];
      //build column array
      column = [];
      for (let row = 0; row < matrix.length; row++) {
        column.push(matrix[row][c]);
      }
      if (isLowestInRow(matrix[r], test) && isHighestInCol(column, test)) {
        luckies.push(test);
      }
    }
  }
  return luckies;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
          [10,  2,  7,  9],
          [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]

function spiralOrder(matrix) {
  let x = 0; //upper bound
  let y = 0; //left bound
  let xLimit = matrix.length; //lower bound
  let yLimit = matrix[0].length; //right bound
  let total = matrix.length * matrix[0].length; //for knowing end
  let result = [];
  while (total > 0) {
    //right motion
    for (let i = y; i < yLimit; i++) {
      result.push(matrix[x][i]);
      total--;
    }
    if (total === 0) break;
    x++;
    //y++;
    //down motion
    for (let i = x; i < xLimit; i++) {
      result.push(matrix[i][yLimit - 1]);
      total--;
    }
    if (total === 0) break;
    yLimit--;
    //x++;
    //left motion
    for (let i = yLimit - 1; i >= y; i--) {
      result.push(matrix[xLimit - 1][i]);
      total--
    }
    if (total === 0) break;
    xLimit--;
    //up motion
    for (let i = xLimit - 1; i >= x; i--) {
      result.push(matrix[i][x - 1]);
      total--
    }
    if (total === 0) break;
    y++;
  }
  return result;
}


matrix = [[ 1, 2, 3],
          [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12]]


console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

matrix = [[1, 2, 3, 4],
          [5, 6, 7, 8],
          [9,10,11,12],
          [13,14,15,16]];

console.log(spiralOrder(matrix)); //[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

matrix = [[1, 2, 3, 4, 5, 6, 7, 8],
          [9, 10, 11, 12,13,14],
          [15,16,17,18,19,20],
          [21,22,23,24, 25,26],
          [27,28,29,30,31,32,],
          [33,34,35,36,37,38]];

console.log(spiralOrder(matrix));

// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
function pyramidArray(base) {
  let pyramid = [base];
  let newArr = [];
  let curArr = base;
  let total = 0;
  for (let i = 1; i <= base.length - 1; i++) {
    total += i;
  }
  while (total > 0) {
    for (let i = 0; i < curArr.length - 1; i++) {
      total--;
      newArr.push(curArr[i] + curArr[i + 1]);
    }
    pyramid.push(newArr);
    curArr = newArr;
    newArr = [];
  }
  return pyramid.reverse();
}

//AA version more efficient
let pyramidArray2 = function(base) {
  let pyramid = [base];
  while (pyramid.length < base.length) {
    let next = adjacentSums(pyramid[0]);
    pyramid.unshift(next);
  }
  return pyramid;
};

let adjacentSums = function(arr) {
  let sums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    sums.push(sum);
  }
  return sums;
};


let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

let pascalsTriangle = function(n) {
  let pascal = [[1]];

  while (pascal.length < n) {
    let prev = pascal[pascal.length - 1];
    let next = [1];
    for (let i = 0; i < prev.length - 1; i++) {
      next.push(prev[i] + prev[i + 1]);
    }
    next.push(1);
    pascal.push(next);
    //prev = next;
  }
  return pascal;
};



console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]
