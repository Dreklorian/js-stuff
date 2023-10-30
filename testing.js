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

function abbreviate(word) {
  let newWord = "";
  for (let i = 0;i<word.length;i++) {
    let test = !("aeiouAEIOU".includes(word[i]));
    if (test) {
      newWord += word[i];
    }
  }
  return newWord;
}
console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

function uncompress(str) {
  let word = "";
  let addOn = "";
  for (let i=0;i<str.length;i+=2) {
    addOn = str[i].repeat(Number(str[i + 1]));
    word += addOn;
  }
  return word;
}
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'

function tripletTrue(str) {
  for (let i=0;i<str.length-2;i++) {
    if (str[i] === str[i+1] && str[i+1] === str[i+2]) {
      return true;
    }
  }
  return false;
}
console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

function sillyString(str) {
  let vowels = "aeiouAEIOU";
  let newWord = "";
  for (let i=0;i<str.length;i++) {
    if (vowels.includes(str[i])) {
      newWord += str[i] + "b" + str[i];
    } else {
      newWord += str[i];
    }
  }
  return newWord;
}
console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

function moreDotLessDash(str) {
  let dots = 0;
  let dashes = 0;
  for (let i = 0; i<str.length;i++) {
    if (str[i] === ".") {
      dots++;
    } else if (str[i] === "-") {
      dashes++;
    }
  }
  /* if (dots > dashes) {
    return true;
  } else {
    return false;
  } */
  return dots > dashes;
}
console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

function hasThreeVowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let vowelList = "";
  for (let i = 0;i<str.length;i++) {
    if (vowels.includes(str[i]) && !(vowelList.includes(str[i]))) {
      vowelList += str[i];
    }
  }
  return vowelList.length > 2;
}

console.log(hasThreeVowels('dElicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false


function lastIndex(str, char) {
  return str.lastIndexOf(char);
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7


function doubleLetterCount(string) {
  let count = 0
  for (let i = 1;i<string.length;i++) {
    if (string[i] === string[i-1]) {
      count++;
    }
  }
  return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1

// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newWord = "";
  let alphaIndex;
  for (let i = 0;i<string.length;i++) {
    alphaIndex = alphabet.indexOf(string[i]);
    /* if (alphaIndex + num > 25) {
      alphaIndex -= 26;
    } */
    newWord += alphabet[(alphaIndex + num) % alphabet.length];
  }
  return newWord;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
console.log(caesarCipher("tuvwxyz", 4));

function vowelCipher(string) {
  const vowels = "aeioua";
  let word = "";
  let vowel;
  for (let i = 0;i<string.length;i++){
    vowel = vowels.indexOf(string[i]);
    if (vowel !== -1) {
      word += vowels[vowel + 1];
    } else {
      word += string[i];
    }
  }
  return word;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
