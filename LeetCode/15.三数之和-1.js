/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	if (!Array.isArray(nums) || nums.length < 3) {
		return [];
	}
	nums = nums.sort((a, b) => a - b);
	let result = new Set();
	for (let i = 0; i < nums.length - 2; i++) {
		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];
			sum === 0 && result.add(JSON.stringify([nums[i], nums[l], nums[r]]));
			sum <= 0 ? l++ : r--;
		}
	}
	result = Array.from(result).map(JSON.parse);
	return result;
};

// @lc code=end
