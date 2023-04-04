/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

const { splice } = require('core-js/core/array')

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let count = 0;
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] !== nums[index + 2]) {
//             nums[count] = nums[index]
//             count++;
//         }
//     }
//     return count
// }
var removeDuplicates = function (nums) {
    let count = 0 // 记录有效数字的个数
    let current = 0 // 记录当前遍历到的位置
    while (current < nums.length) {
        if (nums[current] !== nums[current + 2]) {
            count++
        } else {
            nums.splice(current, 1)
            current = current - 1
        }
        current++
    }
    return count
}
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
// @lc code=end
