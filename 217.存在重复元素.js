/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// // 使用 Set 数据结构：
// var containsDuplicate = function (nums) {
//   return new Set(nums).size !== nums.length;
// };
// // 使用 indexOf() 方法：
// function hasDuplicate(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i]) !== i) {
//       return true;
//     }
//   }
//   return false;
// }
// // 使用 includes() 方法：
// function hasDuplicate(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array.slice(i + 1).includes(array[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// // 使用 reduce() 方法：
// function hasDuplicate(array) {
//   return array.reduce((acc, cur, idx) => {
//     if (array.indexOf(cur) !== idx && !acc.includes(cur)) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []).length > 0;
// }
var containsDuplicate = function (nums) {
  return nums.reduce((acc, cur, idx) => {
    if (nums.indexOf(cur) !== idx && !acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []).length > 0;
};
containsDuplicate([1, 2, 3, 3, 12]);

// @lc code=end


