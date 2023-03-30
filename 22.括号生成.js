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


var generateParenthesis = function (n) {
  const result = [];
  function stack(str, left, right) {
    console.log("🚀 ~ file: 22.括号生成.js:99 ~ stack ~ str, left, right:", str, left, right);

    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    if (left < n) {
      stack(str + '(', left + 1, right);
    }
    if (right < left) {
      stack(str + ')', left, right + 1);
    }
  }
  stack('', 0, 0);
  return result;
};

// Example usage:
console.log(generateParenthesis(3));