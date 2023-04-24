function longestPalindrome (s) {

    // if s is declared less than a character, than it doesn't have a substring so we can return empty
    if (s.length < 1) return "";

    // these 2 variables are for substr() parameter, 1st argument is starting index of the substring and 2nd optional argument is the length of the substring.
    let maxSubStart = 0;
    let maxSubLength = 0;

    for (let i = 0; i < s.length; i++) {
        let lengthCenteredAtChar = expandAroundCenter() //expandFromMiddle()
    }

    return s.substr(maxSubStart, maxSubLength);
}
let s = "babad";
console.log(longestPalindrome(s));