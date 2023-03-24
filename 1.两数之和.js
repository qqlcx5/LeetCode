/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    const exist = target - nums[i];
    if (map.has(exist)) {
      return [map.get(exist), i]
    }
    map.set(nums[i], i)
  }
};


twoSum(nums = [2, 7, 11, 15], target = 9)
// @lc code=end

