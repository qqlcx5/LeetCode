/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// 本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
var climbStairs = function (n) {
  // const dp = []
  // dp[0] = 1
  // dp[1] = 1
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2]
  //   console.log('🚀 ~ file: 70.爬楼梯.js:20 ~ climbStairs ~ dp[i]:', dp[i], i, dp[i - 1], dp[i - 2])
  // }
  // return dp[n]
  // 函数递归 栈溢出
  // if(n === 1) return 1
  // if(n === 2) return 2
  // return climbStairs(n - 1) + climbStairs(n - 2)

  const dp = []
  dp[0] = 1
  dp[1] = 1
  dp[2] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log('🚀 ~ file: 70.爬楼梯.js:13 ~ climbStairs ~ climbStairs:', climbStairs(45))
// @lc code=end
// 3 =3， 4 5 5 = 8 6 13
// dp[i] = dp[i - 1] + dp[i - 2]
// 6 5 4
// 8 5 13
// 5 4 3
