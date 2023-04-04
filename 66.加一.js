/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length
    let i = len - 1
    while (i >= 0) {
        if (digits[i] >= 9) {
            digits[i] = 0
            i--
        } else {
            digits[i]++
            return digits
        }
    }
    digits.unshift(1)
    return digits
}
// console.log(plusOne([1, 2, 4, 9]))

// @lc code=end
