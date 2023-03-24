/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   let arr = x.toString().split('');
//   let isMinus = arr[0] == '-' ? arr.shift() : '';
//   let res = isMinus + arr.reverse().join('') * 1;
//   return (Math.abs(res) > 2 ** 31 - 1) ? 0 : res;
// };
// Math.sign(x) 判断这个值是否负数

// var reverse = function (x) {
//   const s = Math.abs(x).toString().split('').reverse().join('');
//   const result = x < 0 ? -s : +s;
//   return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result;
// };
// var reverse = function (x) {
//   let result = 0;
//   while (x !== 0) {
//     const digit = x % 10;
//     result = result * 10 + digit;
//     if (result > 2 ** 31 - 1 || result < -(2 ** 31)) {
//       return 0;
//     }
//     x = (x - digit) / 10;
//   }
//   return result;
// };
var reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    const digit = x % 10;
    result = result * 10 + digit;
    if (result > 2 ** 31 - 1 || result < -(2 ** 31)) {
      return 0;
    }
    x = (x - digit) / 10;
  }
  return result;
};

console.log("🚀 ~ file: 7.整数反转.js:13 ~ reverse ~ reverse:", reverse(123));

// @lc code=end

