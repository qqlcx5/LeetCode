/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// var generate = function (numRows) {
//     let result = [];
//     for (let i = 0; i < numRows; i++) {
//         for (let j = i - 1; j > 0; j--) {
//             result[j] = result[j] + result[j - 1];
//             console.log(result[j], result[j - 1], result[j] + result[j - 1]);
//         }
//         result.push(1);
//     }
//     return result;
// };

function generate(depth) {
    let triangle = [[1]];
    for (let i = 1; i < depth; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
}

console.log(generate(5));

// @lc code=end

