/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// - 第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。
// - 第 2 秒，提莫再次攻击艾希，并重置中毒计时器，艾希中毒状态需要持续 2 秒，即第 2 秒和第 3 秒。
// 艾希在第 1、2、3 秒处于中毒状态，所以总中毒秒数是 3 。
var findPoisonedDuration = function (timeSeries, duration) {
  let totalDuration = 0
  for (let i = 0; i < timeSeries.length; i++) {
    if (i === timeSeries.length - 1) {
      totalDuration += duration
    } else {
      totalDuration += Math.min(duration, timeSeries[i + 1] - timeSeries[i])
    }
  }
  return totalDuration
}
// @lc code=end
