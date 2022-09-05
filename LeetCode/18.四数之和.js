/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	if (nums.length < 4) return [];

	let result = [];

	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			const tempResult = twoPointReasult(nums, i, j, target);
			console.log(i, j, tempResult);
			if (tempResult.length > 0) {
				result = [...result, ...tempResult];
			}
		}
	}
	return result;
};

var twoPointReasult = function (nums, point1, point2, target) {
	if (point2 - point1 < 3) return [];

	const result = [];

	for (let i = point1; i <= point2 - 3; i = addToNoRepet(nums, i, point2 - 3)) {
		if (nums[i] > target) return result;
		let l = i + 1;
		let r = point2 - 1;

		while (l < r) {
			sum = nums[i] + nums[point2] + nums[l] + nums[r];
			sum === target && result.push([nums[i], nums[l], nums[r], nums[point2]]);
			sum <= target ? (l = addToNoRepet(nums, l, r)) : r--;
		}
	}
	return result;
};

var addToNoRepet = function (nums, i, r) {
	while (nums[i + 1] === nums[i] && i < r) {
		i++;
	}
	return ++i;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0, 5, 0));
// @lc code=end
