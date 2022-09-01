// https://leetcode.cn/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
	let nums = [];
	let length = nums1.length + nums2.length;
	let isArr = length % 2 === 0;
	let pos = isArr ? [length / 2 - 1, length / 2] : Math.floor(length / 2);

	let i = 0,
		j = 0;
	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] <= nums2[j]) {
			nums.push(nums1[i]);
			i++;
		} else {
			nums.push(nums2[j]);
			j++;
		}
		if (isArr && nums.length > pos[1]) {
			return (nums[pos[0]] + nums[pos[1]]) / 2;
		} else if (!isArr && nums.length > pos) {
			return nums[pos];
		}
	}
	while (i < nums1.length) {
		nums.push(nums1[i]);
		i++;
		if (isArr && nums.length > pos[1]) {
			return (nums[pos[0]] + nums[pos[1]]) / 2;
		} else if (!isArr && nums.length > pos) {
			return nums[pos];
		}
	}
	while (j < nums2.length) {
		nums.push(nums2[j]);
		j++;
		if (isArr && nums.length > pos[1]) {
			return (nums[pos[0]] + nums[pos[1]]) / 2;
		} else if (!isArr && nums.length > pos) {
			return nums[pos];
		}
	}
};

// console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([], []));
