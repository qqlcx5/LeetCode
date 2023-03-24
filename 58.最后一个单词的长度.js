/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // let words = s.split(' ')?.filter(Boolean)?.pop().length;
  return s.trim().split(' ').pop().length;
};
// @lc code=end

