//stackexchange recursion https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs
const result = [];
result.length = 3; //n=2

function combine(input, len, start) {
  if(len === 0) {
    console.log( result.join(" ") ); //process here the result
    return;
  }
  for (let i = start; i <= input.length - len; i++) {
    result[result.length - len] = input[i];
    combine(input, len-1, i+1 );
  }
}

const array = ["apple", "banana", "lemon", "mango", "kiwi", "orange", "lime"];
combine( array, result.length, 0);

//stackexchange further down
function choose(arr, k, prefix=[]) {
  if (k == 0) return [prefix];
  return arr.flatMap((v, i) =>
      choose(arr.slice(i+1), k-1, [...prefix, v])
  );
}

console.log(choose([0,1,2,3,4], 3));

//also
var array2 = ["apple", "banana", "lemon", "mango"];

var result2 = array2.reduce( (acc, v, i) =>
    acc.concat(array2.slice(i+1).map( w => v + ' ' + w )), []);

console.log(result2);
