// global scope
let myName = "global";

function function1() {
  // function1's scope
  let myName = "func1";
  console.log("function1 myName: " + myName);
}

function function2() {
  // function2's scope
  let myName = "func2"; //remove let to use the global myName
  console.log("function2 myName: " + myName);
}

function1(); // function1 myName: func1
function2(); // function2 myName: func2
console.log("global myName: " + myName); // global myName: global

// global scope
let person = "Rae";

// sayHello function's local scope
function sayHello() {
  let person = "Jeff";

  // greet function's local scope
  function greet() {
    console.log("Hi, " + person + "!");
    for (let i = 0; i < 1; i++) {
      //console.log(person);
      let person = "Bob";
      console.log(person);
    }
  }
  greet();
}

sayHello(); // logs 'Hi, Jeff!'
console.log(person);
function catSound() {
  var sound = "meow";
  return sound;
}

function dogSound() {
  var sound = "bark";
  return sound;
}

let noise1 = catSound();
let noise2 = dogSound();

console.log(noise1 === noise2);
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
    rand = "let's jam!";
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

console.log(result1 === result2);

function test() {
  console.log(hoistedVar); // => undefined

  var hoistedVar = 10;
}

test();

function blockScope() {
  var test = "upper scope";
  if (true) {
    var test = "lower scope";
    console.log(test); // "lower scope"
  }
  console.log(test); // "upper scope"
}
blockScope();

var str = "not apple";

if (true) {
  console.log(str); //Uncaught ReferenceError: Cannot access 'str' before initialization
  //let str = "apple";
}
function scoping() {
  if (true) {
    doesItWork = "yes"; //becomes global without declaration
  }
}
scoping();
console.log(doesItWork);

function dogParty() {
  if (true) {
    let dog = "Rupert";
    //const dog = "Fluffy";
    var dog = "Poodle";
  }

  return dog;
}

dogParty(); // ???
