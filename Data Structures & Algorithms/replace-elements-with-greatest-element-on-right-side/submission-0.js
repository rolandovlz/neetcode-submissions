class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = -1

        for (let i = arr.length - 1; i >= 0; i--) {
           const curr = arr[i]
           arr[i] = greatest
           greatest = Math.max(greatest, curr)
        }

        return arr
    }
}
