/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 一
// var longestCommonPrefix = function (strs) {
//   let len = strs[0].length;
//   let prefix = '';
//   for (let i = len; i > 0; i--) {
//     prefix = strs[0].substring(0, i);
//     const res = strs.every(item => item.substring(0, i).includes(prefix));
//     if (res) return prefix
//   }
//   return ''
// };
// 优化
var longestCommonPrefix = function (strs) {
  let len = strs[0].length;
  let prefix = '';
  for (let i = len; i > 0; i--) {
    prefix = strs[0].substring(0, i);
    const res = strs.every(item => item.indexOf(prefix) === 0);
    if (res) return prefix;
  }
  return '';
};
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === "") return "";
//     }
//   }
//   return prefix;
// };

longestCommonPrefix(['c', "acc", "c", "ccc"])
// @lc code=end

