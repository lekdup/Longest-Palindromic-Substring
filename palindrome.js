var longestPalindrome = (s) => {
    if (s.length < 1 || s === null) return "";

    let longestSubstring = "";

    for (let i = 0; i < s.length; i++){
        let oddPalindrome = expandFromCenter(s, i, i);
        let evenPalindrome = expandFromCenter(s, i - 1, i);

        if (oddPalindrome.length > longestSubstring.length) {
            longestSubstring = oddPalindrome;
        }

        if (evenPalindrome.length > longestSubstring.length) {
            longestSubstring = evenPalindrome;
        }

    }
    return longestSubstring;
}

let expandFromCenter = (s, left, right) => {
    let i = 0;
    while (s[left-i] && s[left -i] === s[right +i]){
        i++;
    }
    i--;
    return s.slice(left -i, right + i );
}

// console.log(longestPalindrome("babad"));