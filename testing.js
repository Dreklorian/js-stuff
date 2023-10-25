console.log(goodbye("John"));


function goodbye(name){
  return `Good bye, ${name}.`;
}

bye = (name) => `Good bye, ${name}.`;
console.log(bye("Dave"));

console.log(false == false); //true

function fizzBuzz(max) {
  for (let i = 0; i < max; i++) {
      if (((i%3===0)&&(i%5!==0)) ||
          ((i%3!==0)&&(i%5===0))) {
              console.log(i);
          }
  }
}
function dynamicFizzBuzz(max, num1, num2) {
  let arr = [];
  for (let i = 0; i < max; i++) {
    if (((i%num1===0)&&(i%num2!==0)) ||
        ((i%num1!==0)&&(i%num2===0))) {
            arr.push(i);
        }
  }
  return arr;
}

function isPrime(number) {
  for (let i = 2;i<=number**(1/2);i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function fibonacci(length) {
  // your code here
  let arr = [];
  let i = 1;
  if (length === 0) {
    return arr;
  } else if (length === 1) {
    return [1];
  } else if (length === 2) {
    return [1,1];
  } else {
    arr = [1,1];
    while (arr.length !== length) {
      arr.push(arr[i-1] + arr[i]);
      i++;
    }
  }
  return arr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]

function hasVowel(str) {
    for (let i = 0; i < str.length; i++) {
        if ("aeiouAEIOU".includes(str[i])) {
            return true;
        }
    }
    return false;
}

function countVowels(word) {
  // your code here...
  let count = 0;
   for (let i = 0; i < word.length; i++) {
        if ("aeiouAEIOU".includes(word[i])) {
            count++;
        }
    }
    return count;
};

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
  // your code here...
  let firstVowel = 0;
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if ("aeiouAEIOU".includes(word[i])) {
      if (i !== 0) {
        newWord = word.slice(i) + word.slice(0, i) + "ay";
        return newWord;
      } else {
        newWord = word + "yay";
        return newWord;
      }
    }
  }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
