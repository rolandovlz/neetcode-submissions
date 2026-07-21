class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNum = (c) => {
            return (c >= 'A' && c <= 'Z') || 
                (c >= 'a' && c <= 'z') || 
                (c >= '0' && c <= '9')
        }

        let [left, right] = [0, s.length - 1]

        while (left < right) {
            while (left < right && !isAlphaNum(s[left])) {
                left++
            }
            while (left < right && !isAlphaNum(s[right])) {
                right--
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            left++
            right--
        }
        return true
    }
}
