/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let minIndex = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {

    if (s.indexOf(s[i], minIndex) < i) minIndex = s.indexOf(s[i], minIndex) + 1;
    else ans = Math.max(ans, i - minIndex + 1);
  }
  return ans;
};
// @lc code=end

