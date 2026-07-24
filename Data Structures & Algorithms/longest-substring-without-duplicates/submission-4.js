class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set()
        let longest = 0
        let l = 0
        for (let r = 0; r < s.length; r++) {
            while (l < r && set.has(s[r])) {
                set.delete(s[l])
                l++
            }
            set.add(s[r])
            longest = Math.max(longest, set.size)
        }

        return longest
    }
}
