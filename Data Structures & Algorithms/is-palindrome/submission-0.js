class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let k = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        let temp = k.split("").reverse().join("");
        console.log(temp,k);
        return temp===k;      
    }
}
