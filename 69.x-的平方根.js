/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//   let left = 0;
//   let right = x;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (mid * mid === x) {
//       return mid;
//     } else if (mid * mid < x) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return right;
// };

var mySqrt = function (x) {
  // return Math.floor(Math.sqrt(x));
  // return Math.sqrt(x) | 0;
  return ~~Math.sqrt(x);
};

// @lc code=end

