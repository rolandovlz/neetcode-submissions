class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length).fill(0)
        let suffix = 1
        for (let i = 0; i < nums.length; i++) {
            output[i] = suffix
            suffix *= nums[i]
        }

        let postfix = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= postfix
            postfix *= nums[i]
        }

        return output
    }
}

