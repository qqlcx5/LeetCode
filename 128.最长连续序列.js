/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (num) {
  let numSet = new Set(num);
  let maxNum = 0;
  for (let i of numSet) {
    if (!numSet.has(i - 1)) {
      let cur = i;
      let curNum = 1;
      while (numSet.has(cur + 1)) {
        cur++
        curNum++
      }
      maxNum = Math.max(maxNum, curNum)
    }
  }
  return maxNum
};

// function longestConsecutive(nums) {
//   nums.sort((a, b) => a - b);
//   let maxLen = 0;
//   let curLen = 0;
//   for (let i = 1; i <= nums.length; i++) {
//     if (nums[i] == nums[i - 1] + 1) {
//       curLen++;
//     } else if (nums[i] == nums[i - 1]) {
//       continue;
//     } else {
//       maxLen = Math.max(maxLen, curLen);
//       curLen = 1;
//     }
//   }
//   return maxLen;
// }

// function longestConsecutive(nums) {
//   const set = new Set(nums); // 将数组中所有的数字唯一化，放到 set 中
//   let longestStreak = 0;

//   for (const num of set) {
//     // 如果 set 中存在 num-1，那么 num 不是一个连续序列的开头
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let currentStreak = 1;

//       // 继续往后找连续的数字
//       while (set.has(currentNum + 1)) {
//         currentNum++;
//         currentStreak++;
//       }

//       longestStreak = Math.max(longestStreak, currentStreak);
//     }
//   }

//   return longestStreak;
// }

// @lc code=end

