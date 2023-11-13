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
