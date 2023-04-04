/*
 * @lc app=leetcode.cn id=2161 lang=javascript
 *
 * [2161] 根据给定数字划分数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    const res = [];
    collect(nums, res, value => value < pivot)
    collect(nums, res, value => value == pivot)
    collect(nums, res, value => value > pivot)
    return res
}
const collect = (nums, res, condition) => {
    for (let index = 0; index < nums.length; index++) {
        if(condition(nums[index])){
            res.push(nums[index])
        }
    }
}

// var pivotArray = function (nums, pivot) {
//     var res = []

//     collect(nums, res, value => value < pivot)
//     collect(nums, res, value => value == pivot)
//     collect(nums, res, value => value > pivot)

//     return res
// }

// var collect = function (nums, res, condition) {
//     for (var i = 0; i < nums.length; i++) {
//         if (condition(nums[i])) {
//             res.push(nums[i])
//         }
//     }
// }
pivotArray([9, 12, 5, 10, 14, 3, 10], 10)

// var pivotArray = function (nums, pivot) {
//     const left = []
//     const center = []
//     const right = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < pivot) {
//             left.push(nums[i])
//         } else if (nums[i] === pivot) {
//             center.push(nums[i])
//         } else {
//             right.push(nums[i])
//         }
//     }
//     return left.concat(center).concat(right)
// }
// @lc code=end
