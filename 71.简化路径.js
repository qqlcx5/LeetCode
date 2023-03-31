/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let used = path.split('/').filter(Boolean);
  let stack = [];

  for (let i = 0; i < used.length; i++) {
    if (used[i] === '.') { } else if (used[i] === '..') {
      stack.pop();
    } else {
      stack.push(`/${used[i]}`);
    }
  }
  return stack.join('') || '/';
};

// @lc code=end

