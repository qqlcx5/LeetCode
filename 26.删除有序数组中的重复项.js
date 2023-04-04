/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) nums[++i] = nums[j]
  }
  return i + 1
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// @lc code=end
