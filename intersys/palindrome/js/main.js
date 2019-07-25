//Write a program that takes a string as input and prints whether this string is a true palindrome or not. A true palindrome is a string such that if you remove all characters except for letters (uppercase and lowercase), the string is equal if read from left to right and from right to left. If the inputted string is a true palindrome, the message YES (uppercase required) is displayed else NO is displayed.
//Notice that lowercase letters are equal to uppercase letters and vice-versa.

function isPalindrome(str) {
    var regExp = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regExp, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return "NO";
      }
    }
    return "YES";
   }
   console.log(isPalindrome("abut-1-tuba"));
   console.log(isPalindrome("@allula "));
//    console.log(isPalindrome("Tubaabut"));
