/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   let len = nums.length;
//   const arr = Array.from(new Array(len + 1).keys());
//   return arr.filter(i => !nums.includes(i));
// };
var missingNumber = function (nums) {
  for (let index = 0; index < nums.length + 1; index++) {
    if (nums.indexOf(index) === -1) {
      return index;
    }
  }
};
// @lc code=end

