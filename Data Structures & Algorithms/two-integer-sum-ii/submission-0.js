class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [left, right] = [0, numbers.length - 1]

        while (left < right) {
            const curr = numbers[left] + numbers[right]

            if (curr < target) {
                left++
            } else if (curr > target) {
                right--
            } else {
                return [left + 1, right + 1]
            }
        }
    }
}
