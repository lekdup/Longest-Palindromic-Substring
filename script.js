// function longestPalindrome (s) {

//     // if s is declared less than a character, than it doesn't have a substring so we can return empty
//     if (s.length < 1) return "";

//     // these 2 variables are for substr() parameter, 1st argument is starting index of the substring and 2nd optional argument is the length of the substring.
//     let maxSubStart = 0;
//     let maxSubLength = 0;

//     for (let i = 0; i < s.length; i++) {
//         let lengthCenteredAtChar = expandAroundCenter(s, i, i); //expandFromMiddle()
//         let lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
//         let longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
//         if (longestSubAtChar > maxSubLength) {
//             maxSubLength = longestSubAtChar;
//             maxSubStart = i - Math.floor((maxSubLength  - 1) / 2 )
//         }
//     }

//     return s.substr(maxSubStart, maxSubLength);
// }

// function expandAroundCenter(s, left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--;
//         right++
//     }
//     return right - left - 1;
// }
// let s = "cbbd";
// console.log(longestPalindrome(s));



// var longestPalindrome = function(s) {
//     let max = [0, 1];
    
//     for ( let i = 0; i < s.length; i++ ) {
//         let even = getPalindrome(i - 1, i, s);
//         let odd = getPalindrome(i - 1, i + 1, s);
        
//         let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        
//         max = max[1] - max[0] > curMax [1] - curMax[0] ? max : curMax;
//     }
    
//     return s.slice(max[0], max[1]);
// }
// let getPalindrome = (left, right, s) => {
//     while (left >= 0 && right < s.length) {
//         if(s[left] !== s[right]) break;
//         left--;
//         right++;
//     }
//     return [left + 1, right]
// }

// console.log(longestPalindrome("a"));



// var longestPalindrome = function (str) {
//     if( str.length < 1 || str === null) return "";

//     let longestSubstring = "";

//     for (let i = 0; i < str.length; i++) {
//         let oddPalindrome = expandFromCenter(str, i, i);
//         let evenPalindrome = expandFromCenter(str, i-1, i);

//         if( oddPalindrome.length > longestSubstring.length) {
//             longestSubstring = oddPalindrome;
//         }
//         if(evenPalindrome.length > longestSubstring.length){
//             longestSubstring = evenPalindrome;
//         }
//     }
//     return longestSubstring;
// }

// function expandFromCenter(str, left, right) {
//     let i = 0;
//     while(str[left - i] && str[left-i] === str[right + i]){
//         i++;
//     }
//     i--;
    

//     return str.slice(left - i, right + i + 1);
// }
// console.log(longestPalindrome("babad"));

// let s = "babad";
// console.log(s.slice(1 - 1, 2));

// var longestPalindrome = function (s) {
//     if (s.length < 1 || s === null) return "";

//     let longestSubstring = "";

//     for ( let i = 0; i < s.length; i++) {
//         let oddPalidrome = expandAroundCenter(s, i, i);
//         let evenPalindrome = expandAroundCenter(s, i - 1, i);

//         if(oddPalidrome.length > longestSubstring.length) {
//             longestSubstring = oddPalidrome;
//         }
//         if(evenPalindrome.length > longestSubstring.length) {
//             longestSubstring = evenPalindrome;
//         }
//     }
//     return longestSubstring
// }

// let expandAroundCenter = (s, left, right) => {
//     let i = 0;
//     while (s[left - i] && s[left - i] === s[right + 1]) {
//         i++;
//     }
//     i--;

//     return s.slice(left - i, right + i + 1);
// }

// console.log(longestPalindrome("babad"));