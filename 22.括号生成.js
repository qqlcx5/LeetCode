/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 这段代码是用于生成包含n对括号的所有可能合法排列的算法。

// 函数`generateParenthesis`接受一个整数n作为参数，表示需要生成多少对括号。在函数体内部，首先定义了一个空数组`result`，用于存储所有满足条件的括号组合。

// 接下来定义了一个名为`backtrack`的递归函数，该函数有三个参数：`str`表示当前括号组合字符串，`open`表示已经使用的左括号数量，`close`表示已经使用的右括号数量。
// 递归函数中首先进行判断，若当前字符串长度等于2*n，说明已经使用了n对左右括号，将该字符串推入数组`result`中，并返回结束递归。否则，若左括号数量小于n，则可以添加左括号；若右括号数量小于左括号数量，则可以添加右括号。在添加完一个括号后，递归调用自身并更新相应的参数值。

// 最后，在函数体内部调用`backtrack`函数，传入初始参数`(""，0，0)`并返回结果数组`result`，即为所有合法的括号组合。
var generateParenthesis = function (n) {
  const result = [];
  function backtrack(str, open, close) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    if (open < n) {
      backtrack(str + "(", open + 1, close);
    }
    if (close < open) {
      backtrack(str + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
};
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// @lc code=end
