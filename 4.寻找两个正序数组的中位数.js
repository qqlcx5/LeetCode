/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2);
    nums1.sort((a, b) => a - b);
    let len = nums1.length;
    if (len % 2 === 0) {
        return (nums1[len / 2 - 1] + nums1[len / 2]) / 2;
    }
    return nums1[Math.floor(len / 2)];
};
// @lc code=end

