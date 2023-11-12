
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

function initials(name) {
  let init = "";
  let arr = name.toUpperCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    init += arr[i][0];
  }
  return init;
}

console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

function longestWord(sentence) {
  let words = sentence.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

let shortestWord = function(sentence) {
  let words = sentence.split(' ');
  let shortest = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length <= shortest.length) {
      shortest = words[i];
    }
  }
  return shortest;
};
console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
console.log(shortestWord(''));

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'

function containsWord(sentence, targetWord) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === targetWord.toLowerCase()) {
      return true;
    }
  }
  return false;
}

console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

function removeVowels(word) {
  let newWord = "";
  for (let i = 0;i<word.length;i++) {
    let test = !("aeiouAEIOU".includes(word[i]));
    if (test) {
      newWord += word[i];
    }
  }
  return newWord;
}

function abbreviateWords(sentence) {
  let words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = removeVowels(words[i]);
    }
  }
  return words.join(' ');
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

function capitalize(word) {
  let lowWord = word.toLowerCase();
  let capWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i !== 0) {
      capWord += lowWord[i];
    } else {
      capWord += lowWord[i].toUpperCase();
    }
  }
  return capWord;
}

function snakeToCamel(str) {
  let words = str.split('_');
  let word = '';
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  return words.join('');
}

//more efficient AA example
function snakeToCamel2(str) {
  let words = str.split('_');
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      newWords.push(newWord);
  }
  return newWords.join('');
}
console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

function removeLastVowel(word) {
  let vowels = "aeiou";
  let wordArr = word.split('');
  for (let i = wordArr.length - 1; i >= 0; i--) {
    if (vowels.includes(wordArr[i])) {
      wordArr.splice(i, 1);
      return wordArr.join('');
    }
  }
  return wordArr.join('');
}

let hipsterfy = function(sentence) {

  let words = sentence.split(' ');
  let newSentence = [];
  for (let i = 0; i < words.length; i++) {
    newSentence.push(removeLastVowel(words[i]));
  }
  return newSentence.join(' ');
};

//alternate AA versions
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

let hipsterfy2 = function(sentence) {
  let newWords = [];
  let words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      newWords.push(removeLastVowel2(word));
  }

  return newWords.join(' ');
};
console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
console.log(removeLastVowel('testing'));
console.log(hipsterfy('panthers are great animals i think for rhythm'));

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
let reverb = function(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    if ("aeiouAEIOU".includes(word[i])) {
      return word + word.slice(i);
    }
  }
  return word;
};

function repeatWord(word) {
  return word + word;
}

function repeatingTranslate(sentence){
  let words = sentence.split(' ');
  let translation = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length < 3) {
      translation.push(word);
    } else if ('aeiou'.includes(word[word.length - 1])) {
      translation.push(repeatWord(word));
    } else {
      translation.push(reverb(word));
    }
  }
  return translation.join(' ');
}

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

function findFirstVowel(word) {
  for (let i = 0; i < word.length; i++) {
    if ("aeiouAEIOU".includes(word[i])) {
      return i;
    }
  }
  return null;
}
function consonantCancel(sentence) {
  let words = sentence.split(' ');
  let newSentence = [];
  for (let i = 0; i < words.length; i++) {
    firstVowelIndex = findFirstVowel(words[i]);
    if (firstVowelIndex !== null) {
      newSentence.push(words[i].slice(firstVowelIndex));
    }
  }
  return newSentence.join(' ');
}
//alternate AA versions
function consonantCancel2(sentence) {
  let words = sentence.split(" ");
  let newWords = words.map(word => removeFirstConsonants2(word));
  return newWords.join(" ");
}

function removeFirstConsonants2(word) {
  const vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
          return word.slice(i);
      }
  }
}
console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"

function sameCharCollapse(str) {
  let chars = str.split('');
  let i = 0;
  while (i < chars.length) {
    if (chars[i] === chars[i + 1]) {
      chars.splice(i, 2);
      i = 0;
    }
    i++;
  }
  return chars.join('');
}

// AAs less efficient method
function sameCharCollapse2(str) {
  let reducible = true;

  while (reducible) {
      let chars = str.split("");
      reducible = false;

      for (let i = 0; i < chars.length - 1; i++) {
          if (chars[i] == chars[i+1]) {
              chars[i] = "";
              chars[i + 1] = "";
              reducible = true;
          }
      }
      str = chars.join("");
  }
  return str;
}
console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
