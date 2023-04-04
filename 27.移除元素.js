/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums: number[], val: number): number {
//   let i: number = 0,len: number = nums.length;
//   for (let j = 0; j < len; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j]
//       i++
//     }
//   }
//   return i
// }
var removeElement = function (nums, val) {
    let s = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[s] = nums[i]
            s++
        }
    }
    return s
}

// @lc code=end
