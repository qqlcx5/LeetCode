/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0
    let num = 0
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] == 1) {
            num += 1
        } else {
            max = Math.max(max, num)
            num = 0
        }
    }
    return Math.max(max, num)
}

// var findMaxConsecutiveOnes = function (nums) {
//     let max = 0,
//         count = 0
//     for (k of nums) {
//         max = Math.max(max, (count += k))
//         if (!k) count = 0
//     }
//     return max
// }
// @lc code=end
