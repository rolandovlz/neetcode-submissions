class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => [])

        for (const [n,c] of Object.entries(count)) {
            buckets[c].push(Number(n))
        }

        const res = []
        for (let i = buckets.length - 1; i > 0; i--){
            for (const n of buckets[i]) {
                res.push(n)
                if (res.length === k) {
                    return res
                }
            }
        }
    }
}