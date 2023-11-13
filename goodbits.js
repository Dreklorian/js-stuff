//optimized isPrime function
let isPrime = function(num) {
  if (num === 2) return true;
  if ((num < 2) || (num % 2 === 0)) return false;
  for (let i = 3, max = Math.sqrt(num); i <= max; i += 2) {
      if (num % i === 0) return false;
  }
  return true;
}

//nums is array
let choosePrimes = function(nums) {
  let primes = nums.filter(function(num) {
      return isPrime(num);
  });
  return primes;
};

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

let removeLastVowel = function(word) {
  for (let i = word.length - 1; i >= 0; i--) {
      if ("aeiouAEIOU".includes(word[i])) {
          return word.slice(0, i) + word.slice(i + 1);
      }
  }
  return word;
};

let hipsterfy = function(sentence) {
  let words = sentence.split(' ');
  let hipped = words.map(removeLastVowel);
  return hipped.join(' ');
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };
