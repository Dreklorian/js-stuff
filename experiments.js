let word = "Testing mutability";
word = "reassigned";
console.log(word);

let additionMutator = function(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += num
  }
  return arr; //unneeded due to mutation
};

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]

let alternatingWords = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
};

let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]


function reverseString(str) {
  let revStr = str.split("");
  revStr = revStr.reverse();
  revStr = revStr.join("");
  return revStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

function removeLastVowel(word) {
  let newWord = '';
  let lastVowelIndex = null;
  for (let i = word.length - 1; i >= 0; i--) {
    if ("aeiouAEIOU".includes(word[i])) {
      lastVowelIndex = i;
      break;
    }
  }
  for (let j = 0; j < word.length; j++) {
    if (j !== lastVowelIndex) {
      newWord += word[j]
    }
  }
  return newWord
}
//better
let removeLastVowel2 = function(word) {
  let vowels = 'aeiou';

  for(let i = word.length - 1; i >= 0; i--) {
      let char = word[i];
      if (vowels.includes(char)) {
          return word.slice(0, i) + word.slice(i + 1);
      }
  }

  return word;
};

let removeEWords = function(sentence) {
  let arr = sentence.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].toLowerCase().includes("e")) {
      newArr.push(arr[i]);
    }
  }
  let noEs = newArr.join(" ");
  return noEs;
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
