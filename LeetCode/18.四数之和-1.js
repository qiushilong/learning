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

	for (let i = nums.length - 1; i >= 3; i = subToNoRepet(nums, i, 3)) {
		for (let j = 0; j < i - 2; j = addToNoRepet(nums, j, i - 2)) {
			const tempResult = twoPointReasult(nums, j, i, target);
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
	let l = point1 + 1;
	let r = point2 - 1;

	while (l < r) {
		sum = nums[point1] + nums[point2] + nums[l] + nums[r];
		sum === target &&
			result.push([nums[point1], nums[l], nums[r], nums[point2]]);
		sum <= target ? (l = addToNoRepet(nums, l, r)) : r--;
	}
	return result;
};

var addToNoRepet = function (nums, i, r) {
	while (nums[i + 1] === nums[i] && i < r) {
		i++;
	}
	return ++i;
};

var subToNoRepet = function (nums, i, l) {
	while (nums[i - 1] === nums[i] && i > l) {
		i--;
	}
	return --i;
};
// console.log(fourSum([1,0,-1,0,-2,2], 0));
// console.log(twoPointReasult([-2, -1, 0, 0, 1, 2], 0, 5, 0));
// @lc code=end
