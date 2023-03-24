/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} nums
 * @return {string[]}
 */
var letterCombinations = function (nums) {
  if (!nums) return [];
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const res = [];
  const dfs = (curStr, i) => {
    if (i > nums.length - 1) {
      res.push(curStr);
      return;
    }
    const letters = map[nums[i]];
    for (let letter of letters) {
      console.log('letter', curStr + letter, i + 1);
      dfs(curStr + letter, i + 1);
    }
  };
  dfs('', 0);
  return res;
};

letterCombinations('234')
// @lc code=end

