/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	for (let i = 1; i < nums.length; ) {
		if (nums[i] === nums[i - 1]) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}
	return nums.length;
};

(function(){
	let nums=[1,1,2,2,3,4,5,5]
	let k = removeDuplicates(nums); // 调用
	console.log(nums,k)
})()

// console.log(removeDuplicates([1,1,2]));
// @lc code=end
