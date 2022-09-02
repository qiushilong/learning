/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const map = new Map();
map.set("2", ["a", "b", "c"]);
map.set("3", ["d", "e", "f"]);
map.set("4", ["g", "h", "i"]);
map.set("5", ["j", "k", "l"]);
map.set("6", ["m", "n", "o"]);
map.set("7", ["p", "q", "r", "s"]);
map.set("8", ["t", "u", "v"]);
map.set("9", ["w", "x", "y", "z"]);
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) return [];
	if (digits.length === 1) return map.get(digits[0]);
	let result = map.get(digits[0]);
	for (let i = 1; i < digits.length; i++) {
		result = mergeArr(result, map.get(digits[i]));
	}
	return result;
};

var mergeArr = function (arr1, arr2) {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push(arr1[i] + arr2[j]);
		}
	}
	return result;
};

// @lc code=end
