let myDog = {};
myDog.name = "Fido";

// let's use a variable as our key and some bracket notation:
let myKey = "name";
console.log(myDog); // prints `{name: "Fido"}`
console.log(myDog[myKey]); // prints `Fido`

// what if we try to use the variable in dot notation:
// the below is interpreted as myDog['myKey']
console.log(myDog.myKey); // prints: undefined
// continued from above

console.log(myDog.myKey); // prints `undefined`
myDog.myKey = "???";
console.log(myDog); // prints `{name: "Fido", myKey: "???"}`
console.log(myDog.myKey); // prints `???`
// mind === "blown"
// a = b = 1;
// console.log(a);
// console.log(b);

function printObject(obj) {
  let keys = Object.keys(obj);
  keys.forEach(function(key) {
    console.log(key + " - " + obj[key]);
  })
};

//alt function to iterate
function printObject(obj) {
  for (let key in obj) {
    let value = obj[key];
    console.log(key + ' - ' + value);
  }
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120

function catBuilder(name, color, toys) {
  let cat = {};
  cat.name = name;
  cat.color = color;
  cat.toys = toys;
  return cat;
}

//also works
function catBuilder(name, color, toys) {
  let cat = {
    name: name,
    color: color,
    toys: toys
  };

  return cat;
}
console.log(catBuilder("Whiskers", "black", ["scratching-post", "yarn"]));
// prints: { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

console.log(catBuilder("Nyan", "rainbow", ["poptarts"]));
// prints: { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }

let colors = { red: "scarlet", blue: "aquamarine" };
let newColors = { ...colors };
let oldColors = colors;

console.log(newColors);

colors.red = "red";
newColors.blue = "blue";
console.log(newColors);
console.log(colors);
console.log(oldColors);

function resttest(arg1, arg2, ...args) {
  console.log("Arg1 is " + arg1);
  console.log("Arg2 is " + arg2);
  console.log(args);
  console.log(...args);
}

resttest("a", "b", "c", 6, "apple");

let nums = [1,2,3,4];
let numsshallow = nums;
let numsdeep = [...nums];
console.log(nums);
console.log(numsshallow);
console.log(numsdeep);
nums[0] = 9;

console.log(nums);
console.log(numsshallow);
console.log(numsdeep);

[numsdeep[0], numsdeep[1]] = [numsdeep[1], numsdeep[0]]; //proper array element swapping based on destructuring
console.log(numsdeep);


let { a, c, ...obj } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // => 1
console.log(c); // => 3
console.log(obj); // => { b: 2, d: 4 }
