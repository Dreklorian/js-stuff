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
a = b = 1;
console.log(a);
console.log(b);

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
