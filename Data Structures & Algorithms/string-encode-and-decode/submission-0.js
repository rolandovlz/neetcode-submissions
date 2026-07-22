class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for (const str of strs) {
            encodedString += `${str.length}#${str}`
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0;
        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j++
            }
            const len = parseInt(str.substring(i, j))
            i = j + 1
            j = i + len
            res.push(str.substring(i, j))
            i = j
        }
        return res
    }
}
