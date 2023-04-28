let formElement = document.querySelector("form");
formElement.addEventListener("submit", function handlePalindrome(e) {
    e.preventDefault();
    let str = formElement.querySelector("input").value;
    // console.log(inputValue)
    var longestPalindrome = (str) => {
        if (str.length < 1 || str === null) return "";
    
        let longestSubtstring = "";
    
        for (let i = 0; i < str.length; i++) {
            let oddPalidrome = expandFromCenter(str, i, i);
            let evenPalidrome = expandFromCenter(str, i - 1, i);
    
            if (oddPalidrome.length > longestSubtstring.length) {
                longestSubtstring = oddPalidrome;
            } else if (evenPalidrome.length > longestSubtstring.length) {
                longestSubtstring = evenPalidrome;
            }
        }
        return longestSubtstring;
    }
    let expandFromCenter = (str, left, right) => {
        let i = 0;
        while(str[left-i] && str[left-i] === str[right+i]) {
            i++;
        }
        i--;
        return str.slice(left - i, right + i + 1 )
    }
    let result = document.querySelector("#result");
    result.textContent = longestPalindrome(str)
})