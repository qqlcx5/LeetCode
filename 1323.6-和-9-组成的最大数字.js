/*
 * @lc app=leetcode.cn id=1323 lang=javascript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let max = num
  let arr = num.toString().split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 6) {
      arr[i] = 9
      return arr.join('') * 1
    }
  }
  return max
}
console.log('🚀 ~ file: 1323.6-和-9-组成的最大数字.js:13 ~ maximum69Number ~ maximum69Number:', maximum69Number(9669))
// @lc code=end
