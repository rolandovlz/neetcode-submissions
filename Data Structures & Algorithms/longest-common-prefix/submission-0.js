class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = strs[0]

        for (let i = 1; i < strs.length; i++) {
            let k = 0
            while (k < res.length && k < strs[i].length) {
                if (res[k] !== strs[i][k]) {
                    break
                }
                k++
            }
            res = res.slice(0, k)
        }

        return res
    }
}
