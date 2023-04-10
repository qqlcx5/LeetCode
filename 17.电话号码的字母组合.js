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
// var letterCombinations = function (nums) {
//     if (!nums) return [];
//     const map = {
//         '2': 'abc',
//         '3': 'def',
//         '4': 'ghi',
//         '5': 'jkl',
//         '6': 'mno',
//         '7': 'pqrs',
//         '8': 'tuv',
//         '9': 'wxyz'
//     };
//     const res = [];
//     const dfs = (curStr, i) => {
//         if (i > nums.length - 1) {
//             res.push(curStr);
//             return;
//         }
//         const letters = map[nums[i]];
//         for (let letter of letters) {
//             dfs(curStr + letter, i + 1);
//         }
//     };
//     dfs('', 0);
//     return res;
// };

const letterCombinations = function (digits) {
    if (!digits) return [];
    const digitToLetters = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const result = [];
    const dfs = (index, str) => {
        if (index === digits.length) {
            result.push(str);
            return;
        }
        for (const letter of digitToLetters[digits[index]]) {
            dfs(index + 1, str + letter);
        }
    };
    dfs(0, '');
    return result;
};
letterCombinations('234')
// @lc code=end

