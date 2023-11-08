function hasDoubleLetter(str) {
  if (typeof str !== 'string') return null;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('boot camp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumperr')); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(['array'])); // null

let firstVowel = function(str) {
  for (let i = 0; i < str.length; i++) {
    if ("aeiouAEIOU".includes(str[i])) {
      return str[i];
    }
  }
  return null;
};

console.log(firstVowel('battery')); // 'a'
console.log(firstVowel('tunnel')); // 'u'
console.log(firstVowel('dog')); // 'o'
console.log(firstVowel('conventional')); // 'o'
console.log(firstVowel('rhythm')); // null

let lastVowel = function(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if ("aeiouAEIOU".includes(str[i])) {
      return str[i];
    }
  }
  return null;
};

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythmi')); // null

let test = Math.sqrt(16);
console.log(test);
