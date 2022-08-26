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
	// 数组 length < 3，直接返回空数组
	if (nums.length < 3) return [];

	const result = [];
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i = toNOrNotRepet(nums, i, nums.length - 3)) {
		// 数组有序，所以 nums[i] < nums[l] < nums[r]
		// 当 nums[i] > 0，则不存在其他满足三数之和为 0 的情况，跳出 for
		if (nums[i] > 0) break;

		// 定义 l 和 r 指向两端
		let l = i + 1;
		let r = nums.length - 1;

		while (l < r) {
			// 当 nums[i] + nums[l] > 0，则不存在其他满足三数之和为 0 的情况，跳出 while
			if (nums[i] + nums[l] > 0) break;

			const sum = nums[i] + nums[l] + nums[r];
			// 满足条件，push 进 result 数组
			sum === 0 && result.push([nums[i], nums[l], nums[r]]);
			// sum 小于 0，说明 nums[l] 应该更大，l 加至不重复的位置或者达到 r
			// sum 等于 0，任需要考虑其他情况，l 加至不重复的位置或者达到 r
			// sum 大于 0，说明 nums[r] 应该更小，r--，不用考虑重复，因为重复也不满足 sum = 0
			sum <= 0 ? (l = toNOrNotRepet(nums, l, r)) : r--;
		}
	}
	return result;
};

// 加到不出现重复情况的位置，除非到达 n
var toNOrNotRepet = function (nums, i, n) {
	while (i < n && nums[i] === nums[i + 1]) {
		i++;
	}
	return ++i;
};

// @lc code=end
