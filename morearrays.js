
function removeFromArray(location, arr) {
  if (location === "FRONT") {
    arr.shift();
  } else if (location === "BACK") {
    arr.pop();
  } else {
    console.log("ERROR");
  }

}

testArray = [0,1,2,3,4]

removeFromArray("FRONT", testArray)
console.log(testArray) // [1,2,3,4]

removeFromArray("BACK", testArray)
console.log(testArray) // [1,2,3]

removeFromArray("MIDDLE", 4, testArray) // "ERROR"
console.log(testArray) // [1,2,3]

let popper = function(array, num) {
  let removed = [];
  for (let i = 0; i < num; i++) {
    removed.push(array.pop())
  }
  return removed;
};

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

let rotateRight = function(array, num) {
  let rotated = array.slice(num * -1).concat(array.slice(0, array.length - num));
  return rotated;
};

//other way
let rotateRight2 = function(array, num) {
  let copy = array.slice();

  for (let i = 0; i < num; i++) {
      let el = copy.pop();
      copy.unshift(el);
  }

  return copy;
};
/* let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ] */

let rotate = function(array, num) {
  if (num < 0) {
    //rotate left
    for (let i = 0; i > num; i--) {
      let el = array.shift();
      array.push(el);
    }
  } else if (num > 0) {
    //rotate right
    for (let i = 0; i < num; i++) {
      let el = array.pop();
      array.unshift(el);
    }
  }
};

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
