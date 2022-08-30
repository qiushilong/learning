/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums = nums.sort((a, b) => a - b);

	let result = nums[0] + nums[1] + nums[2];
	for (let i = 0; i < nums.length - 2; i++) {
		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
				return target;
			}
			result =
				Math.abs(target - sum) < Math.abs(target - result) ? sum : result;
			sum < target ? l++ : r--;
		}
	}
  return result;
};
// @lc code=end
