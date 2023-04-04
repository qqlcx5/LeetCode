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
var generateParenthesis = function(n) {
    let stuck = []
    let count = 0
    let current = ''
    let left = n
    let right = n
    let isValid = true
    let isStuck = false
    while (count < n * 2) {
        if (isValid) {
            if (left > 0) {
                current += '('
                left--
                count++
            } else if (right > 0) {
                current += ')'
                right--
                count++
            } else {
                isValid = false
            }
        } else {
            if (current[count - 1] === '(') {
                current = current.slice(0, count - 1) + ')'
                right++
                count--
            } else {
                current = current.slice(0, count - 1) + '('
                left++
                count--
            }
        }
        if (current.length === n * 2) {
            stuck.push(current)
            current = ''
            count = 0
            left = n
            right = n
            isValid = true
        }
    }
};

// var generateParenthesis = function(n) {
//   const result = [];

//   function backtrack(str, open, close) {
//     if (str.length === n * 2) {
//       result.push(str);
//       return;
//     }
//     if (open < n) {
//       backtrack(str + "(", open + 1, close);
//     }
//     if (close < open) {
//       backtrack(str + ")", open, close + 1);
//     }
//   }

//   backtrack("", 0, 0);
//   return result;
// }
// Stack:
// function generateParenthesis(n) {
//   const result = [];
//   const stack = [];

//   stack.push(['(', 1, 0]);

//   while (stack.length) {
//     const [s, left, right] = stack.pop();

//     if (s.length === n * 2) {
//       result.push(s);
//       continue;
//     }

//     if (left < n) {
//       stack.push([s + '(', left + 1, right]);
//     }

//     if (right < left) {
//       stack.push([s + ')', left, right + 1]);
//     }
//   }

//   return result;
// }
// Closure number:
// function generateParenthesis(n) {
//   if (n === 0) {
//     return [''];
//   }

//   const result = [];

//   for (let c = 0; c < n; c++) {
//     for (const left of generateParenthesis(c)) {
//       for (const right of generateParenthesis(n - c - 1)) {
//         result.push(`(${left})${right}`);
//       }
//     }
//   }

//   return result;
// }


// var generateParenthesis = function (n) {
//   const result = [];
//   function stack(str, left, right) {
//     if (str.length === n * 2) {
//       result.push(str);
//       return;
//     }
//     if (left < n) {
//       stack(str + '(', left+1, right);
//     }
//     if (right < left) {
//       stack(str + ')', left, right+1);
//     }
//   }
//   stack('', 0, 0);
//   return result;
// };


// var generateParenthesis = function (n) {
//   const result = [];
//   function stack(str, left, right) {
//     if (str.length === n * 2) {
//       result.push(str);
//       return;
//     }
//     if (left < n) {
//       stack(str + '(', left + 1, right);
//     }
//     if (right < left) {
//       stack(str + ')', left, right + 1);
//     }
//   }
//   stack('', 0, 0);
//   return result;
// };
// @lc code=end

