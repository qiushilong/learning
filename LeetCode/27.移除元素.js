/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	const needDelNum = nums.reduce((pre, item) => {
		return item === val ? pre + 1 : pre;
	}, 0);
	for (let i = 0, j = nums.length-1; i < nums.length-needDelNum; ) {
		if (nums[i] === val) {
			nums[i] = nums[j] ^ nums[i];
			nums[j] = nums[j] ^ nums[i];
			nums[i] = nums[j] ^ nums[i];
			j--;
		} else {
			i++;
		}
	}
  return nums.length-needDelNum;
};

// (function(){
//   let arr=[0, 1, 2, 2, 3, 0, 4, 2]
//   let result=removeElement(arr, 2);
//   console.log(arr,result)
// })()

// @lc code=end
