/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const len = nums.length
    for (let x = 0; x < len; x++) {
        for (let y = x + 1; y < len; y++) {
            if (nums[x] + nums[y] === target) {
                return [x, y]
            }
        }
    }
}
// var twoSum = function (nums, target) {
//     let map = new Map()
//     for (var i = 0; i < nums.length; i++) {
//         const exist = target - nums[i]
//         if (map.has(exist)) {
//             return [map.get(exist), i]
//         }
//         map.set(nums[i], i)
//     }
// }
// @lc code=end
