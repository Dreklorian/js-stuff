function echo(string) {
  let echoed = string.toUpperCase() + " ... " + string;
  echoed += " ... " + string.toLowerCase();
  console.log(echoed);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

function countVowels(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if ("aeiou".includes(word[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  for (let i = 0; i < word.length; i++){
    if ("aeiouAEIOU".includes(word[i])) {
      if (i === 0) {
        return word + "yay";
      } else {
        return word.slice(i) + word.slice(0, i) + "ay";
      }
    }
  }

};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

let myIndexOf = function(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(myIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
console.log(myIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

function fizzBuzz(max) {
  let fizz = [];
  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
      fizz.push(i);
    }
  }
  return fizz;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

function removeLastVowel(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    if ("aeiou".includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

function leastCommonMultiple(num1, num2) {
  for (let i = 1; i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < (num / 2 + 1); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function choosePrimes(nums) {
  let primes = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      primes.push(nums[i]);
    }
  }
  return primes;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

function uncompress(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) {
    let char = str[i];
    let reps = Number(str[i + 1]);
    newStr += char.repeat(reps);
  }
  return newStr;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

function hipsterfy(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = removeLastVowel(words[i]);
  }
  return words.join(" ");
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

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

function findLastVowel(word) {
  for (let i = word.length - 1; i >= 0; i--) {
    if ("aeiou".includes(word[i])) {
      return i;
    }
  }
}

function repeatingTranslate(sentence) {
  let words = sentence.split(' ');
  let translation = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length < 3) {
      translation.push(word);
    } else if (findLastVowel(word) === word.length - 1) {
      translation.push(word + word);
    } else {
      translation.push(word + word.slice(findLastVowel(word)));
    }
  }
  return translation.join(' ');
}


console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
