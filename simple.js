console.log(9.3 % 3.1);
console.log(9 % 3.1);
console.log(5/2.1111111111);
let a = "5";
let b = 5;
let c = '5';
console.log(a == b);
console.log(b !== c);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(!!!false);
console.log(a + c);
let test = "This is a TEST.";
test[1] = test[1].toUpperCase()
console.log(test);
console.log(typeof(test[1]));
const newtest = 4
console.log(newtest);
let dog;
console.log(dog + "god");
newtest + 4;
console.log(`I am an example
of an extremely long string
on multiple lines`);
console.log("I am an example\n" + "of an extremely long string");
console.log("I am an example\n of an extremely long string");
//console.log(goodNight());

// var goodNight = function() {
//   return "Good Night!";
// };
let str1 = "apple";

str1.toUpperCase(); // returns APPLE

str2 = str1.toUpperCase();

console.log(str1); //prints apple
console.log(str2); //prints APPLE
function tests() {
//if ([]) return true;
//if ({}) return true;
if ("") return true;
}
console.log(tests());
if (!"0") {
  console.log("Hello!");
} else if (!-42) {
  console.log("Goodbye!");
} else if (!-Infinity) {
  console.log("Have a nice day!");
} else {
  console.log("We meet again");
}
if ("false") {
  console.log("Hello!");
} else if ([]) {
  console.log("Goodbye!");
} else if ("") {
  console.log("Have a nice day!");
} else {
  console.log("party time is over");
}
var zoo = "panda";

if (true) {
  console.log(zoo);
  //let zoo = "lion";
}
// function dogParty() {
//   if (true) {
//     let dog = "Rupert";
//     const dog = "Fluffy";
//     var dog = "Poodle";
//   }

//   return dog;
// }

// console.log(dogParty()); // ???
function letsJam() {
  // letsJam's scope
  let rand = 3;

  if (true) {
    const rand = 2;
  }

  if (true) {
    let rand = 1;
  }

  if (true) {
    const rand = "let's jam!";
  }

  return rand;
}

console.log(letsJam());
function inner() {
  let str = "hello";
  return str;
}

function outer() {
  let test = inner();
  return test;
}

let result1 = outer();

result2 = inner();

console.log(result1 === result2); // ???
let foo = function() {
  console.log("hello");
  return 42;
};

console.log(foo);
