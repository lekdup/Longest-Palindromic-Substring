function longestPalindrome (s) {
    // if s is declared less than a character, than it doesn't have a substring so we can return empty
    if (s.length < 1) return "";
    let maxSubStart = 0;
    let maxSubLength = 0;

    return s.substr(maxSubStart, maxSubLength);
}
let s = "babad";
console.log(longestPalindrome(s));