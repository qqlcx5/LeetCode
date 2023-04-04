/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    value = 0
    for (let i = 0; i < s.length; i++) {
        const a = s[i], b = s[i + 1]
        symbols[a] < symbols[b] ? (value -= symbols[a]) : (value += symbols[a])
        console.log(value);
    }
    return value
}
console.log(romanToInt('CMC'));
// @lc code=end
