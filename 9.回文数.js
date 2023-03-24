/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  let result = 0
  let bak = x
  while (x !== 0){
    const digit = x % 10
    result = result * 10 + digit
    x = (x - digit) / 10
  }
  return result === bak;
};
// @lc code=end

