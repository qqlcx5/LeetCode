/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let result = 0;
//   for (var i = 1; i < height.length; i++) {
//     for (var j = 0; j < i; j++) {
//       const rev =
//         result = result > rev ? result : rev;
//     }
//   }
//   console.log("🚀 ~ file: 11.盛最多水的容器.js:22 ~ maxArea ~ result:", result);
//   return result;
// };

var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    height[left] < height[right] ? left++ : right--;
  }
  return max;
};

// var maxArea = function (height) {
//   let max = 0;
//   let left = 0;
//   let right = height.length - 1;

//   while (left < right) {
//     const area = Math.min(height[left], height[right]) * (right - left);
//     max = Math.max(max, area);

//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return max;
// };
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// @lc code=end

